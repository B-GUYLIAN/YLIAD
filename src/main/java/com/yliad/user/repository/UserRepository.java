package com.yliad.user.repository;

import com.yliad.user.entity.User;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    Boolean existsByNickname(String nickname);
    Boolean existsByLoginId(String loginId);
    Optional<User> findByLoginId(String LoginId);
}