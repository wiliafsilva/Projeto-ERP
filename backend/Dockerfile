FROM maven:3.8-openjdk-17 as build

WORKDIR /app

COPY ERPEstoque/pom.xml .  

RUN mvn dependency:go-offline

COPY ERPEstoque/src ./src  

RUN mvn package -DskipTests

FROM openjdk:17-jdk-slim

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]
