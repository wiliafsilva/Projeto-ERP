# Etapa 1: Build da aplicação
FROM maven:3.8-openjdk-17 AS build
WORKDIR /app

# Copia o arquivo pom.xml e baixa as dependências (usado para otimizar o cache)
COPY backend/pom.xml .
RUN mvn dependency:go-offline

# Copia o código fonte e compila o projeto
COPY backend/src ./src
RUN mvn package -DskipTests

# Etapa 2: Configuração da imagem final para execução
FROM openjdk:17-jdk-slim
WORKDIR /app

# Copia o arquivo JAR gerado no estágio de build
COPY --from=build /app/target/*.jar app.jar

# Define a porta que a aplicação usará
EXPOSE 8080

# Comando para iniciar a aplicação
CMD ["java", "-jar", "app.jar"]
