package com.yliad.user.security.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
@RequiredArgsConstructor
public class WebSecurityConfig {

  public static String[] SWAGGER_URL_PATHS = new String[]{"/swagger-ui.html",
      "/swagger-resources/**",
      "/v2/api-docs", "/webjars/**", "/swagger-ui/index.html", "/configuration/**",
      "/swagger*/**", "/swagger-ui/"};
  private final JwtTokenProvider jwtTokenProvider;
  private final JwtAuthenticationEntryPoint authenticationErrorHandler;
  private final JwtAccessDeniedHandler jwtAccessDeniedHandler;

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
        .csrf().disable()
        .httpBasic().disable()
        .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider),
            UsernamePasswordAuthenticationFilter.class)
        .exceptionHandling()
        .authenticationEntryPoint(authenticationErrorHandler)
        .accessDeniedHandler(jwtAccessDeniedHandler) // https 접근 제어
        // create no session
        .and()
        .sessionManagement(
            session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        .authorizeRequests((auth) -> auth
            .antMatchers("/h2-console/**").permitAll()
            .antMatchers("/**/actuator/**").permitAll()
            .antMatchers(HttpMethod.GET, "/api/**").permitAll()
            .antMatchers(HttpMethod.POST, "/api/users/**").permitAll()
                //인증로직 개선전까지 임시허용
                .antMatchers(HttpMethod.DELETE, "/api/**").permitAll()
                .antMatchers(HttpMethod.PATCH, "/api/**").permitAll()
                //인증로직 개선전까지 임시허용
            .antMatchers(HttpMethod.POST, "/api/auth/**").permitAll()
            .antMatchers(SWAGGER_URL_PATHS).permitAll()
            .anyRequest().authenticated())
        .cors();
    return http.build();
  }
}
