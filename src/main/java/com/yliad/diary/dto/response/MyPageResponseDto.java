package com.yliad.diary.dto.response;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class MyPageResponseDto {

    @NotNull
    private int monthCount;
    @NotNull
    private int yearCount;
    @NotNull
    private int totalCount;

    @NotNull
    private int anger;
    @NotNull
    private int disgust;
    @NotNull
    private int fear;
    @NotNull
    private int joy;
    @NotNull
    private int love;
    @NotNull
    private int sad;

    @Builder
    public MyPageResponseDto(int monthCount, int yearCount, int totalCount, int anger, int disgust, int fear, int joy, int love, int sad) {
        this.monthCount = monthCount;
        this.yearCount = yearCount;
        this.totalCount = totalCount;
        this.anger = anger;
        this.disgust = disgust;
        this.fear = fear;
        this.joy = joy;
        this.love = love;
        this.sad = sad;
    }
}
