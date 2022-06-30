package com.yliad.diary.service;

import com.yliad.diary.dto.request.SaveDiaryRequestDto;
import com.yliad.diary.dto.response.MyPageResponseDto;
import com.yliad.diary.entity.Diary;
import com.yliad.diary.repository.DiaryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class DiaryService {

    private final DiaryRepository diaryRepository;

    //일기작성
    @Transactional
    public void saveDiary(SaveDiaryRequestDto requestDto) {
        Diary diary = requestDto.toEntity();
        diaryRepository.save(diary);
    }

    public MyPageResponseDto getMyPage(Long userId){
        int currentYear = LocalDateTime.now().getYear();
        int currentMonth = LocalDateTime.now().getMonthValue();

        MyPageResponseDto responseDto = MyPageResponseDto.builder()
                .monthCount(0)
                .yearCount(0)
                .totalCount(0)
                .anger(0)
                .disgust(0)
                .fear(0)
                .joy(0)
                .love(0)
                .sad(0)
                .build();

        int countYear = diaryRepository.countDiaryYear(userId, currentYear);
        int countMonth = diaryRepository.countDiaryMonth(userId, currentYear, currentMonth);
        int countTotal = diaryRepository.countDiaryTotal(userId);
        List<String> list1 = diaryRepository.countMonthEmotion(userId, currentYear, currentMonth);
        List<Integer> list2 = diaryRepository.countMonthEmotionCount(userId, currentYear, currentMonth);

        responseDto.setYearCount(countYear);
        responseDto.setMonthCount(countMonth);
        responseDto.setTotalCount(countTotal);

        for(int i = 0; i < list1.size(); i++){
            if (list1.get(i).equals("anger"))
                responseDto.setAnger(list2.get(i));
            if (list1.get(i).equals("disgust"))
                responseDto.setDisgust(list2.get(i));
            if (list1.get(i).equals("fear"))
                responseDto.setFear(list2.get(i));
            if (list1.get(i).equals("joy"))
                responseDto.setJoy(list2.get(i));
            if (list1.get(i).equals("love"))
                responseDto.setLove(list2.get(i));
            if (list1.get(i).equals("sad"))
                responseDto.setSad(list2.get(i));
        }

        return responseDto;
    }
}
