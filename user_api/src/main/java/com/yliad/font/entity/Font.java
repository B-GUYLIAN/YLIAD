package com.yliad.font.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Font {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "fontId")
    private Long id;

    private String name;

    private String fontUUID;

    public Font(Long id, String name, String fontUUID) {
        this.id = id;
        this.name = name;
        this.fontUUID = fontUUID;
    }
}
