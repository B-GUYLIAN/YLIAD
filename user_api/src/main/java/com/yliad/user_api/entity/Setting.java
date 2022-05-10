package com.yliad.user_api.entity;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Setting {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "settingId")
    private Long id;

    @OneToOne(mappedBy = "setting", cascade = CascadeType.PERSIST, orphanRemoval = true)
    @JoinColumn(name="settingId")
    private User user;

    private String bgmUUID;

    private String themeUUID;

    private String fontUUID;

    //폰트,테마,bgm을 enum으로 넣은다면?

    public Setting(Long id, User user, String bgmUUID, String themeUUID, String fontUUID) {
        this.id = id;
        this.user = user;
        this.bgmUUID = bgmUUID;
        this.themeUUID = themeUUID;
        this.fontUUID = fontUUID;
    }
}
