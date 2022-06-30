package com.yliad.diary.controller;

import com.yliad.diary.dto.request.*;
import com.yliad.diary.dto.response.CalendarDayResponseDto;
import com.yliad.diary.dto.response.CalendarResponseDto;
import com.yliad.diary.dto.response.MyPageResponseDto;
import com.yliad.diary.repository.DiaryQueryRepository;
import com.yliad.diary.service.DiaryService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/diary")
@RequiredArgsConstructor
public class DiaryController {

    private final DiaryService service;
    private final DiaryQueryRepository diaryQueryRepository;

    @PostMapping
    @ApiOperation(value = "일기 작성")
    public ResponseEntity<Void> saveDiary(@RequestBody SaveDiaryRequestDto requestDto){
        service.saveDiary(requestDto);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/mypage")
    @ApiOperation(value = "마이페이지")
    public ResponseEntity<MyPageResponseDto> checkMyPage (@RequestBody DiaryUserIDRequestDto requestDto){
        MyPageResponseDto responseDto = service.getMyPage(requestDto.getUserID());
        return ResponseEntity.status(200).body(responseDto);
    }

    @PostMapping("/calendar")
    @ApiOperation(value = "월별 일기 기록데이터 - 달력 표시용")
    public ResponseEntity<List<CalendarResponseDto>> checkCalendar (@RequestBody DiaryYMIRequestDto requestDto){
        List<CalendarResponseDto> list = diaryQueryRepository.findDiaryByDiaryDateAndUserIDOrderByDiaryDate(requestDto.getUserID(),
                requestDto.getYear(),
                requestDto.getMonth());
        return ResponseEntity.status(200).body(list);
    }

    @PostMapping("/date")
    @ApiOperation(value = "달력-날짜 선택")
    public ResponseEntity<List<CalendarDayResponseDto>> selectDate (@RequestBody DiaryRequestDto requestDto){
        List<CalendarDayResponseDto> list = diaryQueryRepository.findDiaryDate(requestDto.getUserID(),
                requestDto.getYear(),
                requestDto.getMonth(),
                requestDto.getDay());
        return ResponseEntity.status(200).body(list);
    }

}
