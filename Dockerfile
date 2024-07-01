FROM node:18-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["sh", "-c", "npm run build && npm run start-dev"]