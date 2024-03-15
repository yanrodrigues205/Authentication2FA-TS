FROM node:19.5.0-alpine as base

WORKDIR /home/node/ts/app

COPY package*.json ./

RUN npm install

COPY . .

FROM base as production

ENV NODE_PATH=./build
