package com.yliad.gateway.config

import mu.KotlinLogging
import org.springframework.cloud.gateway.filter.GatewayFilter
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory
import org.springframework.stereotype.Component
import reactor.core.publisher.Mono

@Component
class GlobalFilter : AbstractGatewayFilterFactory<GlobalFilter.Config>(Config::class.java) {
    private val logger = KotlinLogging.logger {}

    override fun apply(config: Config): GatewayFilter = GatewayFilter { exchange, chain ->
        val request = exchange.request
        val response = exchange.response

        logger.info { "Global Filter baseMessage : ${config.baseMessage}"}

        if(config.preLogger){
            logger.info { "Global Filter Start : request id -> ${request.id}"}
        }

        chain.filter(exchange).then(Mono.fromRunnable {
            if(config.postLogger){
                logger.info { "Global Filter End : response code -> ${response.statusCode}"}
            }
        })
    }

    data class Config(
        var baseMessage:String,
        var preLogger : Boolean,
        var postLogger : Boolean
    )
}