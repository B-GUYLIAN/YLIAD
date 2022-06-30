package com.yliad.user.security.config;

import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.boot.context.properties.ConstructorBinding

@ConstructorBinding
@ConfigurationProperties(prefix = "token")
data class JwtProperties (
    val accessTokenExpirationTime : Long,
    val refreshTokenExpirationTime : Long,
    val secret : String
)