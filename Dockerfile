FROM node:24-alpine

WORKDIR /app

COPY package*.json prisma.config.ts tsconfig*.json nest-cli.json ./
COPY prisma ./prisma
RUN npm ci

COPY src ./src
RUN npm run build

ENV NODE_ENV=production
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
