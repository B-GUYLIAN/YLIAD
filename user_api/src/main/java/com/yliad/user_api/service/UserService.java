package com.yliad.user_api.service;

import com.yliad.user_api.dto.request.SaveUserRequestDto;
import com.yliad.user_api.entity.User;
import com.yliad.user_api.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.DuplicateFormatFlagsException;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class UserService {

    private final UserRepository userRepository;

    //회원가입
    @Transactional
    public void saveUser(SaveUserRequestDto requestDto) {
        checkDuplicateMemberNickname(requestDto.getNickname());
        User user = requestDto.toEntity();
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
    private void checkDuplicateMemberNickname(String nickname) {
        if(userRepository.existsByNickname(nickname)){
//            throw new Exception("");
            //예외처리코드만들기
        }
    }

    private User getUser(Long userId){
        return userRepository.findById(userId)
                .orElseThrow(IllegalArgumentException::new);
    }
}
