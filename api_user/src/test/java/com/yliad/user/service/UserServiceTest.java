package com.yliad.user.service;

import com.yliad.user.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertThrows;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {
//    @InjectMocks
//    private UserService service;
//
//    @Mock
//    private UserRepository repository;
//
//    @Test
//    public void UserServiceIsNotNull() throws Exception{
//        assertThat(service).isNotNull();
//    }

//    @Test
//    public void 회원가입_실패() throws Exception{
//        final Long id = 1L;
//        final String nickname = "지환";
//        final String password = "1234";
//        doThrow(new IllegalStateException()).when(repository).findById(anyLong());
//
//        final IllegalArgumentException result = assertThrows(IllegalArgumentException.class,
//                () -> service.saveUser(id, nickname, password));
//
//        assertThat(result.getClass()).isEqualTo(IllegalArgumentException.class);
//
//    }


}
