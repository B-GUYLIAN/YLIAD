package com.yliad.diary.repository;

import com.yliad.diary.dto.response.CalendarDayResponseDto;
import com.yliad.diary.dto.response.CalendarResponseDto;

import java.util.List;

public interface DiaryQueryRepository {

    List<CalendarResponseDto> findDiaryByDiaryDateAndUserIDOrderByDiaryDate(Long userid, Long year, Long month);
    List<CalendarDayResponseDto> findDiaryDate(Long userid, Long year, Long month, Long day);
}
