package com.yliad.user.security.adapter;

import com.yliad.user.entity.User;
import com.yliad.user.security.dto.UserDto;

/**
 * Member Entity를 Dto로 변환시켜주는 Adapter
 */
public class UserAndDtoAdapter {

  public static UserDto entityToDto(User user) {
    return UserDto.builder()
        .id(user.getId())
        .nickname(user.getNickname())
        .password(user.getPassword())
        .userRole(user.getMemberRole())
        .createDate(user.getCreatedDate())
        .build();
  }
}
