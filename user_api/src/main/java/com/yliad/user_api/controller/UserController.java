package com.yliad.user_api.controller;

import com.yliad.user_api.dto.request.SaveUserRequestDto;
import com.yliad.user_api.service.UserService;
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

    @DeleteMapping
    @ApiOperation(value = "회원 탈퇴")
    public ResponseEntity<Void> delete(@RequestBody Long userId) {
        service.delete(userId);
        return ResponseEntity.status(200).build();
    }

    @GetMapping("/nickname/{nickname}")
    @ApiOperation(value = "닉네임 중복체크")
    public ResponseEntity<Void> checkNickname(@PathVariable("nickname") String nickname) {
        service.checkDuplicateUserNickname(nickname);
        return ResponseEntity.status(200).build();
    }
}
