package com.yliad.user.exception.handler;

import com.yliad.user.exception.CustomErrorResult;
import lombok.Builder;
import lombok.Getter;
import org.springframework.http.ResponseEntity;

import java.time.LocalDateTime;

@Getter
@Builder
public class ErrorResponse {

  private final LocalDateTime timestamp = LocalDateTime.now();
  private final int status;
  private final String error;
  private final String code;
  private final String message;

  public static ResponseEntity<ErrorResponse> toResponseEntity(
      CustomErrorResult customErrorResult) {
    return ResponseEntity.status(customErrorResult.getHttpStatus())
        .body(ErrorResponse.builder().status(customErrorResult.getHttpStatus().value())
            .error(customErrorResult.getHttpStatus().name())
            .code(customErrorResult.name())
            .message(customErrorResult.getDetail()).build());
  }
}