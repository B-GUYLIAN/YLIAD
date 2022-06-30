package com.yliad.user.security.controller;

import com.yliad.user.entity.User;
import com.yliad.user.exception.CustomException;
import com.yliad.user.repository.UserRepository;
import com.yliad.user.security.adapter.UserAndDtoAdapter;
import com.yliad.user.security.config.JwtTokenProvider;
import com.yliad.user.security.dto.LoginRequestDto;
import com.yliad.user.security.dto.LoginResponseDto;
import com.yliad.user.security.dto.UserDto;
import io.swagger.annotations.ApiOperation;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import static com.yliad.user.exception.CustomErrorResult.USER_NOT_FOUND;
import static com.yliad.user.exception.CustomErrorResult.WRONG_PASSWORD;

/**
 * 사용자 SNS 및 네이티브 로그인 관련 컨트롤러
 */
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Slf4j
public class AuthenticationRestController {

  private final JwtTokenProvider jwtTokenProvider;
  private final UserRepository userRepository;

  @PostMapping
  @ApiOperation(value = "Native 로그인")
  public ResponseEntity<LoginResponseDto> authorize(@RequestBody LoginRequestDto loginDto,
      HttpServletResponse response) {
    User user = userRepository.findByLoginId(loginDto.getLoginId())
        .orElseThrow(()->new CustomException(USER_NOT_FOUND));
    if (!user.getPassword().equals(loginDto.getPassword())) {
      throw new CustomException(WRONG_PASSWORD);
    }
    String jwtToken = setTokenHeader(user, response);
    return ResponseEntity.status(200).body(LoginResponseDto.of(user, jwtToken));
  }

  public String setTokenHeader(User user, HttpServletResponse response) {
    UserDto userDto = UserAndDtoAdapter.entityToDto(user);
    String accessToken = jwtTokenProvider.createAccessToken(userDto.getId().toString(),
        userDto.getUserRole());
    String refreshToken = jwtTokenProvider.createRefreshToken(userDto.getId().toString(),
        userDto.getUserRole());
    jwtTokenProvider.setHeaderAccessToken(response, accessToken);
    jwtTokenProvider.setHeaderRefreshToken(response, refreshToken);
    return refreshToken;
  }
}
