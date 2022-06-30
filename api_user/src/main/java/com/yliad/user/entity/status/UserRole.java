package com.yliad.user.entity.status;

import java.util.Arrays;
import lombok.Getter;

@Getter
public enum UserRole {
  ROLE_ADMIN("관리자"),
  ROLE_USER("회원");

  private final String description;

  UserRole(String description) {
    this.description = description;
  }

  public static UserRole findByMethod(String description) {
    return Arrays.stream(values())
        .filter(m -> m.description.equals(description))
        .findFirst()
        .orElseThrow(IllegalArgumentException::new);
  }
}

