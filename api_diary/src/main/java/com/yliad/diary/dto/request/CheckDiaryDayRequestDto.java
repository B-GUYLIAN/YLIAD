package com.yliad.diary.dto.request;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class CheckDiaryDayRequestDto {
    @NotNull
    private Long userID;
    @NotNull
    private Long day;
}
