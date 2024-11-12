# Etapa 1: Build do front-end
FROM node:lts-alpine

WORKDIR /app/front-end

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
