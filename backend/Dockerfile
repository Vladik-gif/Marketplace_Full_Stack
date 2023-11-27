#Build Gradle
FROM gradle:7.3-jdk11 AS builder
WORKDIR /app
COPY build.gradle .
COPY settings.gradle .
COPY src ./src
RUN gradle build --no-daemon

#Build Java
FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app
COPY ./build/libs/backend-0.0.1-SNAPSHOT.jar /backend.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar", "/backend.jar"]