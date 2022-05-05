package com.yliad.user_api.repository;

import com.yliad.user_api.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    Boolean existsByNickname(String nickname);
}