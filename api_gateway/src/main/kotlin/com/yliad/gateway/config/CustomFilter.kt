package com.yliad.gateway.config

import mu.KotlinLogging
import org.springframework.cloud.gateway.filter.GatewayFilter
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory
import org.springframework.stereotype.Component
import reactor.core.publisher.Mono

@Component
class CustomFilter : AbstractGatewayFilterFactory<CustomFilter.Config>(Config::class.java) {
    private val logger = KotlinLogging.logger {}

    override fun apply(config: Config?): GatewayFilter = GatewayFilter { exchange, chain ->
        val request = exchange.request
        val response = exchange.response

        logger.info { "Custom PRE filter : request id ->  ${request.id}"}

        chain.filter(exchange).then(Mono.fromRunnable {
            logger.info{"Custom POST filter : response code ->  ${response.statusCode}"}
        })
    }

    class Config
}