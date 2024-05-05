FROM node:20-alpine

WORKDIR /WC

COPY package.json .
COPY . .
RUN npm i
RUN npm run db:migrate
EXPOSE 3000

CMD npm run dev
