# Etapa 1: Build do front-end
FROM node:lts AS build
WORKDIR /app

# Copia os arquivos de dependência e instala
COPY front-end/package*.json ./front-end/
RUN npm install --prefix front-end

# Copia o código do front-end
COPY front-end/ ./front-end/

# Gera os arquivos estáticos para produção
RUN npm run build --prefix front-end