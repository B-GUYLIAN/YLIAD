package com.yliad.diary.dto.request;

import com.sun.istack.NotNull;
import com.yliad.diary.entity.Diary;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
public class SaveDiaryRequestDto {
    @NotNull
    private LocalDateTime diaryDate;
    @NotNull
    private String content;
    @NotNull
    private String emotion;
    @NotNull
    private String voiceFilePath;
    @NotNull
    private String diaryUUID;

    @Builder
    public SaveDiaryRequestDto(LocalDateTime diaryDate, String content, String emotion, String voiceFilePath, String diaryUUID) {
        this.diaryDate = diaryDate;
        this.content = content;
        this.emotion = emotion;
        this.voiceFilePath = voiceFilePath;
        this.diaryUUID = diaryUUID;
    }

    public Diary toEntity(){
        Diary diary = Diary.builder()
                .diaryDate(diaryDate)
                .content(content)
                .emotion(emotion)
                .voiceFilePath(voiceFilePath)
                .diaryUUID(diaryUUID)
                .build();
        return diary;
    }
}
