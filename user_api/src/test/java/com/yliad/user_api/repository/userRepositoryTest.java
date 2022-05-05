package com.yliad.user_api.repository;

import com.yliad.user_api.entity.User;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.assertj.core.api.Assertions.*;

@DataJpaTest
public class userRepositoryTest {

    @Autowired
    UserRepository repository;

    @Test
    public void UserRepositoryIsNotNull() throws Exception{
        assertThat(repository).isNotNull();
    }

    @Test
    public void 회원가입() throws Exception{
        User user = User.builder()
                .id(1L)
                .nickname("지환")
                .password("1234")
                .build();
        User savedUser = repository.save(user);

        assertThat(savedUser.getId()).isEqualTo(1L);
        assertThat(savedUser.getNickname()).isEqualTo("지환");
        assertThat(savedUser.getPassword()).isEqualTo("1234");
    }

    @Test
    public void 회원조회() throws Exception{
        User user = User.builder()
                .id(1L)
                .nickname("지환")
                .password("1234")
                .build();
        repository.save(user);

        User findUser = repository.findById(1L).orElseThrow(IllegalStateException::new);

        assertThat(findUser.getId()).isEqualTo(1L);
        assertThat(findUser.getNickname()).isEqualTo("지환");
        assertThat(findUser.getPassword()).isEqualTo("1234");
    }
}