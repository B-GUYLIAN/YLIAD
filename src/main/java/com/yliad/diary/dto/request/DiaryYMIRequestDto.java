package com.yliad.diary.dto.request;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class DiaryYMIRequestDto {
    @NotNull
    private Long userID;
    @NotNull
    private Long year;
    @NotNull
    private Long month;
}
