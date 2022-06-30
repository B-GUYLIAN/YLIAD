package com.yliad.gateway.config;

import org.springframework.cloud.gateway.config.GlobalCorsProperties;
import org.springframework.cloud.gateway.handler.FilteringWebHandler;
import org.springframework.cloud.gateway.handler.RoutePredicateHandlerMapping;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.core.env.Environment;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

public class PassCorsRoutePredicateHandlerMapping extends RoutePredicateHandlerMapping {

  public PassCorsRoutePredicateHandlerMapping(FilteringWebHandler webHandler, RouteLocator routeLocator,
      GlobalCorsProperties globalCorsProperties, Environment environment) {
    super(webHandler, routeLocator, globalCorsProperties, environment);
  }

  @Override
  public Mono<Object> getHandler(ServerWebExchange exchange) {
    return getHandlerInternal(exchange).map(handler -> {
      return handler;
    });
  }
}