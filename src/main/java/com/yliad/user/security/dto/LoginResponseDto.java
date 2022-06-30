package com.yliad.user.security.dto;

import com.sun.istack.NotNull;
import com.yliad.user.entity.User;
import com.yliad.user.entity.status.UserRole;
import java.util.Set;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * 로그인 후 클라이언트에게 전달되는 반환 DTO
 */
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class LoginResponseDto {
  @NotNull
  private Long id;
  @NotNull
  private String nickname;
  @NotNull
  private String theme;
  @NotNull
  private String bgm;
  @NotNull
  private String font;
  @NotNull
  private String jwtToken;

  public static LoginResponseDto of(User user, String jwtToken) {
    return new LoginResponseDto(user.getId(),
        user.getNickname(),
            user.getSetting().getThemeName(),
            user.getSetting().getBgmName(),
            user.getSetting().getFontName(),
            jwtToken);
  }
}
