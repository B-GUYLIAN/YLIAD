package com.yliad.bgm.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Bgm {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "bgmId")
    private Long id;

    private String name;

    private String bgmUUID;

    public Bgm(Long id, String name, String bgmUUID) {
        this.id = id;
        this.name = name;
        this.bgmUUID = bgmUUID;
    }
}
