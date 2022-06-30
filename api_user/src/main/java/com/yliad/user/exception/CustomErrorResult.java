package com.yliad.user.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum CustomErrorResult {
  /* 400 BAD_REQUEST : 잘못된 요청 */
  INVALID_REFRESH_TOKEN(HttpStatus.BAD_REQUEST, "리프레시 토큰이 유효하지 않습니다"),
  MISMATCH_REFRESH_TOKEN(HttpStatus.BAD_REQUEST, "리프레시 토큰의 유저 정보가 일치하지 않습니다"),
  INVALID_VOTES(HttpStatus.BAD_REQUEST, "0개 이하의 투표권은 사용이 불가능합니다."),
  ALREADY_VOTES(HttpStatus.BAD_REQUEST, "이미 투표한 회원입니다."),
  IMPOSSIBLE_STATUS_TO_MODIFY(HttpStatus.BAD_REQUEST, "수정이 불가능한 상태입니다."),


  /* 401 UNAUTHORIZED : 인증되지 않은 사용자 */
  INVALID_AUTH_TOKEN(HttpStatus.UNAUTHORIZED, "권한 정보가 없는 토큰입니다"),
  UNAUTHORIZED_MEMBER(HttpStatus.UNAUTHORIZED, "현재 내 계정 정보가 존재하지 않습니다"),
  INVALID_COMMENT_OWNER(HttpStatus.UNAUTHORIZED, "해당 댓글에 대한 권한이 없습니다."),
  WRONG_PASSWORD(HttpStatus.UNAUTHORIZED, "비밀번호가 불일치합니다."),
  WRONG_VERIFY_CODE(HttpStatus.UNAUTHORIZED, "인증번호가 일치하지 않습니다."),
  UNAUTHORIZED_MEMBER_ROLE(HttpStatus.UNAUTHORIZED, "허용되지 않은 권한 입니다."),

  /* 404 NOT_FOUND : Resource 를 찾을 수 없음 */
  USER_NOT_FOUND(HttpStatus.NOT_FOUND, "해당 유저 정보를 찾을 수 없습니다"),
  VOTE_NOT_FOUND(HttpStatus.NOT_FOUND, "해당 투표 정보를 찾을 수 없습니다"),
  STATUS_NOT_FOUND(HttpStatus.NOT_FOUND, "해당 상태 정보를 찾을 수 없습니다"),
  CANDIDATE_NOT_FOUND(HttpStatus.NOT_FOUND, "해당 후보자 정보를 찾을 수 없습니다"),
  COMMENT_NOT_FOUND(HttpStatus.NOT_FOUND, "해당 댓글 정보를 찾을 수 없습니다"),
  TOKEN_NOT_FOUND(HttpStatus.NOT_FOUND, "요청 헤더에 토큰이 없습니다"),
  REFRESH_TOKEN_NOT_FOUND(HttpStatus.NOT_FOUND, "로그아웃 된 사용자입니다"),
  ROLE_NOT_FOUND(HttpStatus.NOT_FOUND, "해당 권한 정보를 찾을 수 없습니다"),
  CONTACT_NOT_FOUND(HttpStatus.NOT_FOUND, "해당 1:1 문의를 찾을 수 없습니다"),

  /*406*/
  INVALID_USER_BANNED(HttpStatus.NOT_ACCEPTABLE, "차단된 유저입니다."),

  /* 409 CONFLICT : Resource 의 현재 상태와 충돌. 보통 중복된 데이터 존재 */
  DUPLICATE_RESOURCE(HttpStatus.CONFLICT, "데이터가 이미 존재합니다"),
  DUPLICATE_USERID(HttpStatus.CONFLICT, "이미 존재하는 ID입니다"),
  DUPLICATE_NICKNAME(HttpStatus.CONFLICT, "이미 존재하는 닉네임입니다"),
  DUPLICATE_NAME(HttpStatus.CONFLICT, "이미 존재하는 네임입니다"),
  DUPLICATE_EMAIL(HttpStatus.CONFLICT, "이미 존재하는 이메일입니다"),
  DUPLICATE_PHONE_NUMBER(HttpStatus.CONFLICT, "이미 존재하는 휴대폰번호입니다"),

  /*500*/
  FAIL_SEND_SMS(HttpStatus.INTERNAL_SERVER_ERROR, "SMS 전송 실패"),

  ;

  private final HttpStatus httpStatus;
  private final String detail;
}
