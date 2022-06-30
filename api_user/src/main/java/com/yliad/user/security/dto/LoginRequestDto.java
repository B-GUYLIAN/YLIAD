package com.yliad.user.security.dto;

import javax.validation.constraints.NotNull;
import lombok.Data;

/**
 * Native 로그인 요청 DTO
 */
@Data
public class LoginRequestDto {

  @NotNull
  private String loginId;

  @NotNull
  private String password;
}
