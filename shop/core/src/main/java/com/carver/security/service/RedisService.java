package com.carver.security.service;

import java.time.Duration;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RedisService {

  private final RedisTemplate<String, String> redisTemplate;

  // 키-벨류 설정
  public void setValues(String token, Long id) {
    ValueOperations<String, String> values = redisTemplate.opsForValue();
    values.set(token, id.toString(), Duration.ofMinutes(600));  // 10시간 뒤 메모리에서 삭제된다.
  }

  // 키값으로 벨류 가져오기
  public String getValues(String token) {
    ValueOperations<String, String> values = redisTemplate.opsForValue();
    return values.get(token);
  }

  // 키-벨류 삭제
  public void delValues(String token) {
    redisTemplate.delete(token.substring(7));
  }
}