plugins {
    java
}


dependencies {
    /* JPA */
    implementation("org.springframework.boot:spring-boot-starter-data-jpa")
    implementation("com.github.gavlyukovskiy:p6spy-spring-boot-starter:1.8.0")
    implementation("com.querydsl:querydsl-jpa")
    implementation("com.querydsl:querydsl-apt")

    /* Security */
    implementation("org.springframework.boot:spring-boot-starter-security")
    testImplementation("org.springframework.security:spring-security-test")

    /* Jwt */
    implementation("io.jsonwebtoken:jjwt-api:0.11.2")
    runtimeOnly("io.jsonwebtoken:jjwt-impl:0.11.2")
    runtimeOnly("io.jsonwebtoken:jjwt-jackson:0.11.2")

    /* Redis */
    implementation("org.springframework.boot:spring-boot-starter-data-redis")

    /* db */
    runtimeOnly("com.h2database:h2")
    runtimeOnly("org.mariadb.jdbc:mariadb-java-client")

    /* Swagger */
    implementation("io.springfox:springfox-boot-starter:3.0.0")
    implementation("io.springfox:springfox-swagger-ui:3.0.0")

    /* webflux */
    implementation("org.springframework.boot:spring-boot-starter-webflux")
    testImplementation("io.projectreactor:reactor-test")
}

tasks.getByName<Test>("test") {
    useJUnitPlatform()
}