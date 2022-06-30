package com.yliad.diary.repository;

import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.DateTemplate;
import com.querydsl.core.types.dsl.Expressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.yliad.diary.dto.response.CalendarDayResponseDto;
import com.yliad.diary.dto.response.CalendarResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

import static com.yliad.diary.entity.QDiary.diary;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Repository
public class DiaryQueryRepositoryImpl implements DiaryQueryRepository {

    private final JPAQueryFactory query;

    @Override
    public List<CalendarResponseDto> findDiaryByDiaryDateAndUserIDOrderByDiaryDate(Long userid, Long year, Long month) {
        DateTemplate<LocalDateTime> formatDate =
                Expressions.dateTemplate(LocalDateTime.class,
                        "to_char({0}, {1})", diary.diaryDate, "YYYY-MM-DD");
        return query.select(
                        Projections.constructor(CalendarResponseDto.class,
                                diary.diaryDate,
                                diary.emotion
                        ))
                .from(diary)
                .where(diary.userID.eq(userid)
                        .and(diary.diaryDate.year().eq(year.intValue()))
                        .and(diary.diaryDate.month().eq(month.intValue())))
                .groupBy(diary.id, formatDate)
                .orderBy(diary.id.asc())
//                .limit(1)
                .fetch();
    }

    @Override
    public List<CalendarDayResponseDto> findDiaryDate(Long userid, Long year, Long month, Long day) {
        return query.select(
                        Projections.constructor(CalendarDayResponseDto.class,
                                diary.diaryDate,
                                diary.content,
                                diary.emotion,
                                diary.voiceFilePath
                        ))
                .from(diary)
                .where(diary.userID.eq(userid)
                        .and(diary.diaryDate.year().eq(year.intValue()))
                        .and(diary.diaryDate.month().eq(month.intValue()))
                        .and(diary.diaryDate.dayOfMonth().eq(day.intValue())))
                .orderBy(diary.id.asc())
                .fetch();
    }
}
