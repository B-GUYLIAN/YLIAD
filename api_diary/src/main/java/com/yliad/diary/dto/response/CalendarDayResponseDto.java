package com.yliad.diary.dto.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.sun.istack.NotNull;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class CalendarDayResponseDto {
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm")
    @NotNull
    private LocalDateTime diaryDate;
    @NotNull
    private String content;
    @NotNull
    private String emotion;
    @NotNull
    private String voiceFilePath;

    @Builder
    public CalendarDayResponseDto(LocalDateTime diaryDate, String content, String emotion, String voiceFilePath) {
        this.diaryDate = diaryDate;
        this.content = content;
        this.emotion = emotion;
        this.voiceFilePath = voiceFilePath;
    }
}
