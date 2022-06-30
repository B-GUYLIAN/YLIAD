package com.yliad.user.dto.request;

import com.sun.istack.NotNull;
import com.yliad.user.entity.User;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
@NoArgsConstructor
public class UpdatePasswordRequestDto {
    @NotNull
    private String password;
}
