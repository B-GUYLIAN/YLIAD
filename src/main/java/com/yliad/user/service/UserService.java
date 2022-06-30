package com.yliad.user.service;

import com.yliad.user.dto.request.SaveUserRequestDto;
import com.yliad.user.dto.request.UpdateBgmSettingRequestDto;
import com.yliad.user.dto.request.UpdateFontSettingRequestDto;
import com.yliad.user.dto.request.UpdateThemeSettingRequestDto;
import com.yliad.user.entity.Setting;
import com.yliad.user.entity.User;
import com.yliad.user.exception.CustomErrorResult;
import com.yliad.user.exception.CustomException;
import com.yliad.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserService {

    private final UserRepository userRepository;

    //회원가입
    @Transactional
    public void saveUser(SaveUserRequestDto requestDto) {
        checkDuplicateUserLoginId(requestDto.getLoginId());
        userRepository.save(requestDto.toEntity());
    }

    //닉네임 변경
    @Transactional
    public void changeNickname(Long userId, String nickname){
        User user = getUser(userId);
        user.changeNickname(nickname);
    }

    //비밀번호 변경
    @Transactional
    public void changePassword(Long userId, String password){
        User user = getUser(userId);
        user.changePassword(password);
    }

    //회원탈퇴
    @Transactional
    public void delete(Long userId){
        User user = getUser(userId);
        userRepository.delete(user);
    }

    //닉네임 중복체크
    public void checkDuplicateUserNickname(String nickname) {
        if(userRepository.existsByNickname(nickname)){
            throw new CustomException(CustomErrorResult.DUPLICATE_NICKNAME);
        }
    }

    //로그인아이디 중복체크
    public void checkDuplicateUserLoginId(String loginId) {
        if(userRepository.existsByLoginId(loginId)){
            throw new CustomException(CustomErrorResult.DUPLICATE_USERID);
        }
    }

    private User getUser(Long userId){
        return userRepository.findById(userId)
                .orElseThrow(IllegalArgumentException::new);
    }

    //Bgm 변경
    @Transactional
    public void changeBgm(UpdateBgmSettingRequestDto requestDto, Long userId){
        User findUser = getUser(userId);
        findUser.getSetting().changeBgm(requestDto.getBgmName());
    }

    //Font 변경
    @Transactional
    public void changeFont(UpdateFontSettingRequestDto requestDto, Long userId){
        User findUser = getUser(userId);
        findUser.getSetting().changeFont(requestDto.getFontName());
    }

    //Theme 변경
    @Transactional
    public void changeTheme(UpdateThemeSettingRequestDto requestDto, Long userId){
        User findUser = getUser(userId);
        findUser.getSetting().changeTheme(requestDto.getThemeName());
    }
}
