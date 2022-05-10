package com.yliad.theme.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Theme {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "themeId")
    private Long id;

    private String name;

    private int like;

    private String themeUUID;

    public Theme(Long id, String name, int like, String themeUUID) {
        this.id = id;
        this.name = name;
        this.like = like;
        this.themeUUID = themeUUID;
    }
}
