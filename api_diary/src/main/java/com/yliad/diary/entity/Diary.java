package com.yliad.diary.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.querydsl.core.annotations.QueryEntity;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Entity
@QueryEntity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Diary extends BaseTimeEntity {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "diaryId")
    private Long id;

    private String content;

    private String emotion;

    private String voiceFilePath;

    private Long userID;

    @Builder
    public Diary(Long id, String content, String emotion, String voiceFilePath, Long userID) {
        this.id = id;
        this.content = content;
        this.emotion = emotion;
        this.voiceFilePath = voiceFilePath;
        this.userID = userID;
    }
}
