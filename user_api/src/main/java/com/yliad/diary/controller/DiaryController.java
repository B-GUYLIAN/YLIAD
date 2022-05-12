package com.yliad.diary.controller;

import com.yliad.diary.dto.request.SaveDiaryRequestDto;
import com.yliad.diary.service.DiaryService;
import com.yliad.user_api.dto.request.SaveUserRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/diary")
@RequiredArgsConstructor
public class DiaryController {

    private final DiaryService service;

    @PostMapping
//    @ApiOperation(value = "텍스트 일기 작성")
    public ResponseEntity<Void> save(@RequestBody SaveDiaryRequestDto requestDto){
        service.saveDiary(requestDto);
        return ResponseEntity.ok().build();
    }
}
