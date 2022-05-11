package com.yliad.bgm.repository;

import com.yliad.bgm.entity.Bgm;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BgmRepository extends JpaRepository<Bgm, Long> {
}