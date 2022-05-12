package com.yliad.diary.service;

import com.yliad.diary.dto.request.SaveDiaryRequestDto;
import com.yliad.diary.entity.Diary;
import com.yliad.diary.repository.DiaryRepository;
import com.yliad.user_api.dto.request.SaveUserRequestDto;
import com.yliad.user_api.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class DiaryService {

    private final DiaryRepository diaryRepository;

    //텍스트 일기작성
    @Transactional
    public void saveDiary(SaveDiaryRequestDto requestDto) {
        Diary diary = requestDto.toEntity();
        diaryRepository.save(requestDto.toEntity());
    }
}
