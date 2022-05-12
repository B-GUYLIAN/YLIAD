package com.yliad.user_api.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UserDiary {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "userDiaryId")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    private String diaryUUID;

    public UserDiary(Long id, User user, String diaryUUID) {
        this.id = id;
        this.user = user;
        this.diaryUUID = diaryUUID;
    }
}
