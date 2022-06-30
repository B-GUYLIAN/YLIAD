package com.yliad.user.security.dto;

import com.yliad.user.entity.status.UserRole;
import java.time.LocalDateTime;
import java.util.Set;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;

/**
 * Security 세션에 저장되어있는 로그인된 사용자 정보
 */
@Getter
@Builder
public class UserDto {

  private Long id;

  @NotNull
  private String nickname;

  @Email
  private String email;

  @NotNull
  private String password;

  @NotNull
  private String phoneNumber;

  private Set<UserRole> userRole;

  private LocalDateTime createDate;

}
