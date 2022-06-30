package com.yliad.user.security.service;


import com.yliad.user.entity.User;
import com.yliad.user.repository.UserRepository;
import com.yliad.user.security.adapter.CustomUserAndUserAdapter;
import com.yliad.user.security.adapter.UserAndDtoAdapter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * Security 필터에 의해서 수행되는 회원 서비스
 */
@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

  private final UserRepository userRepository;

  /**
   * 인가된 사용자를 DB에서 불러와 UserDetails 형태로 반환한다.
   */
  @Override
  public UserDetails loadUserByUsername(final String id) {
    User findMember = userRepository.findById(Long.parseLong(id))
        .orElseThrow(() -> new UsernameNotFoundException(
            "User with id " + id + " was not found in the database"));
    return CustomUserAndUserAdapter.from(UserAndDtoAdapter.entityToDto(findMember));
  }
}
