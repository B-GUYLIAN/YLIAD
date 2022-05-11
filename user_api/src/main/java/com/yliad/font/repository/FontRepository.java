package com.yliad.font.repository;

import com.yliad.font.entity.Font;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FontRepository extends JpaRepository<Font, Long> {
}