package com.yliad.user.controller;

import com.yliad.user.dto.request.*;
import com.yliad.user.security.CurrentUser;
import com.yliad.user.security.dto.UserDto;
import com.yliad.user.service.UserService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService service;

    @PostMapping
    @ApiOperation(value = "회원 가입")
    public ResponseEntity<Void> save(@RequestBody SaveUserRequestDto requestDto){
        service.saveUser(requestDto);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{userId}")
    @ApiOperation(value = "회원 탈퇴")
    public ResponseEntity<Void> delete(@PathVariable Long userId) {
        service.delete(userId);
        return ResponseEntity.status(200).build();
    }

    @GetMapping("/nickname/{nickname}")
    @ApiOperation(value = "닉네임 중복체크")
    public ResponseEntity<Void> checkNickname(@PathVariable("nickname") String nickname) {
        service.checkDuplicateUserNickname(nickname);
        return ResponseEntity.status(200).build();
    }

    @GetMapping("/loginId/{loginId}")
    @ApiOperation(value = "로그인 아이디 중복체크")
    public ResponseEntity<Void> checkLoginId(@PathVariable("loginId") String loginId) {
        service.checkDuplicateUserLoginId(loginId);
        return ResponseEntity.status(200).build();
    }

    @PatchMapping("/nickname/update/{userId}")
    @ApiOperation(value = "닉네임 수정")
    public ResponseEntity<Void> changeNickname(@PathVariable("userId") Long userId, @RequestBody UpdateNicknameRequestDto requestDto) {
        service.changeNickname(userId, requestDto.getNickname());
        return ResponseEntity.status(200).build();
    }

    @PatchMapping("/password/update/{userId}")
    @ApiOperation(value = "패스워드 수정")
    public ResponseEntity<Void> changePassword(@PathVariable("userId") Long userId, @RequestBody UpdatePasswordRequestDto requestDto) {
        service.changePassword(userId, requestDto.getPassword());
        return ResponseEntity.status(200).build();
    }

    @PatchMapping("/bgm/{userId}")
    @ApiOperation(value = "Bgm 수정")
    public ResponseEntity<Void> changeBgm(@PathVariable("userId") Long userId, @RequestBody UpdateBgmSettingRequestDto requestDto) {
        service.changeBgm(requestDto, userId);
        return ResponseEntity.status(200).build();
    }

    @PatchMapping("/font/{userId}")
    @ApiOperation(value = "Font 수정")
    public ResponseEntity<Void> changeFont(@PathVariable("userId") Long userId, @RequestBody UpdateFontSettingRequestDto requestDto) {
        service.changeFont(requestDto, userId);
        return ResponseEntity.status(200).build();
    }

    @PatchMapping("/theme/{userId}")
    @ApiOperation(value = "Theme 수정")
    public ResponseEntity<Void> changeTheme(@PathVariable("userId") Long userId, @RequestBody UpdateThemeSettingRequestDto requestDto) {
        service.changeTheme(requestDto, userId);
        return ResponseEntity.status(200).build();
    }
}
