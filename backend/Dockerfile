# Dockerfile localizado em backend/
FROM maven:3.8-openjdk-17 as build
WORKDIR /app
COPY ERPEstoque/pom.xml .  
# Copia o pom.xml do subdiretório ERPEstoque
RUN mvn dependency:go-offline
COPY ERPEstoque/src ./src  
# Copia o diretório src do subdiretório ERPEstoque
RUN mvn package -DskipTests

FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]
