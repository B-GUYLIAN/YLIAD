package com.yliad.user.security.adapter;

import com.yliad.user.entity.status.UserRole;
import com.yliad.user.security.dto.UserDto;
import java.util.Collection;
import java.util.Set;
import java.util.stream.Collectors;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;

/**
 * MemberDto와 UserDeatils를 연결하는 Adapter
 */
@Getter
public class CustomUserAndUserAdapter extends User {

  private final UserDto userDto;

  private CustomUserAndUserAdapter(UserDto userDto) {
    super(userDto.getEmail(), userDto.getPassword(),
        authorities(userDto.getUserRole()));
    this.userDto = userDto;
  }

  public static CustomUserAndUserAdapter from(UserDto userDto) {
    return new CustomUserAndUserAdapter(userDto);
  }

  private static Collection<? extends GrantedAuthority> authorities(Set<UserRole> roles) {
    return roles.stream()
        .map(r -> new SimpleGrantedAuthority(r.name()))
        .collect(Collectors.toSet());
  }

}
