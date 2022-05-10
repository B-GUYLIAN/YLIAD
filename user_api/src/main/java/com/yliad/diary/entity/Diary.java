package com.yliad.diary.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Diary {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "diaryId")
    private Long id;

    private LocalDateTime diaryDate;

    private String content;

    private String emotion;

    private String diaryUUID;

    public Diary(Long id, LocalDateTime diaryDate, String content, String emotion, String diaryUUID) {
        this.id = id;
        this.diaryDate = diaryDate;
        this.content = content;
        this.emotion = emotion;
        this.diaryUUID = diaryUUID;
    }
}
