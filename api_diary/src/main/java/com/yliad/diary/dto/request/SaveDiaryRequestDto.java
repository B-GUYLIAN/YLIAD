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
    private String content;
    @NotNull
    private String emotion;
    @NotNull
    private String voiceFilePath;
    @NotNull
    private Long userID;

    @Builder
    public SaveDiaryRequestDto(String content, String emotion, String voiceFilePath, Long userID) {
        this.content = content;
        this.emotion = emotion;
        this.voiceFilePath = voiceFilePath;
        this.userID = userID;
    }

    public Diary toEntity(){
        Diary diary = Diary.builder()
                .content(content)
                .emotion(emotion)
                .voiceFilePath(voiceFilePath)
                .userID(userID)
                .build();
        return diary;
    }
}
