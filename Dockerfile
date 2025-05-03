FROM node:lts-alpine3.17

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

ENV PORT 3OOO
ENV HOST 0.0.0.0

EXPOSE 3000


CMD ["sh", "-c", "npx prisma generate && npm run dev"]