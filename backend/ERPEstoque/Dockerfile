# Stage 1: Build
FROM maven:3.9.5-eclipse-temurin-17-alpine AS builder

WORKDIR /app

# Copia o pom.xml do diretório ERPEstoque
COPY pom.xml .
RUN mvn dependency:go-offline

# Copia o diretório src do diretório ERPEstoque
COPY src ./src
RUN mvn package -DskipTests

# Stage 2: Runtime
FROM eclipse-temurin:17-alpine

WORKDIR /app
COPY --from=builder /app/target/*.jar app.jar

EXPOSE 8081
ENTRYPOINT ["java", "-jar", "app.jar"]
