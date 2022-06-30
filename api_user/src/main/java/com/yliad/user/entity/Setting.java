package com.yliad.user.entity;

import com.yliad.user.entity.common.BaseTimeEntity;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Entity
public class Setting extends BaseTimeEntity {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "setting_id")
    private Long id;

    @OneToOne(mappedBy = "setting", cascade = CascadeType.PERSIST, orphanRemoval = true)
    private User user;

    private String bgmName;

    private String themeName;

    private String fontName;

    public Setting() {
        this.bgmName = "MyStar";
        this.themeName = "modak";
        this.fontName = "Font6";
    }

    public void changeBgm(String bgmName) {
        this.bgmName = bgmName;
    }
    public void changeFont(String fontName) {
        this.fontName = fontName;
    }
    public void changeTheme(String themeName) {
        this.themeName = themeName;
    }
}
