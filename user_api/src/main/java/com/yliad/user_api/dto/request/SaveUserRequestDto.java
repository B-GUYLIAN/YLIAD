package com.yliad.user_api.dto.request;

import com.sun.istack.NotNull;
import com.yliad.user_api.entity.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class SaveUserRequestDto {
    @NotNull
    private String loginid;
    @NotNull
    private String nickname;
    @NotNull
    private String password;

    @Builder
    public SaveUserRequestDto(String loginid, String nickname, String password) {
        this.loginid = loginid;
        this.nickname = nickname;
        this.password = password;
    }

    public User toEntity(){
        User user = User.builder()
                .loginid(loginid)
                .nickname(nickname)
                .password(password)
                .build();
        return user;
    }
}
