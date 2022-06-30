package com.yliad.user.entity;

import com.yliad.user.entity.common.BaseTimeEntity;
import com.yliad.user.entity.status.UserRole;
import java.util.HashSet;
import java.util.Set;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class User extends BaseTimeEntity {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "user_id")
    private Long id;

    private String loginId;

    private String nickname;

    private String password;

    @ElementCollection(fetch = FetchType.EAGER)
    @Enumerated(EnumType.STRING)
    private final Set<UserRole> memberRole = new HashSet<>();

    @OneToOne(cascade = CascadeType.PERSIST, orphanRemoval = true)
    @JoinColumn(name="setting_id")
    private Setting setting;

    @Builder
    public User(String loginId, String nickname, String password) {
        this.loginId = loginId;
        this.nickname = nickname;
        this.password = password;
        this.setting = new Setting();
    }

    public void changeNickname(String nickname) { this.nickname = nickname; }

    public void changePassword(String password) {
        this.password = password;
    }
}
