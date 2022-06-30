package com.yliad.user.dto.request;

import com.sun.istack.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
@NoArgsConstructor
public class UpdateThemeSettingRequestDto {
    @NotNull
    private String themeName;
}
