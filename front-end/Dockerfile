FROM node:20-alpine

WORKDIR /app

# Copia os arquivos package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código da pasta front-end
COPY . .

# Executa o build do projeto
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
