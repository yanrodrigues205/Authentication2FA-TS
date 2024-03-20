FROM node:18.18.0 as base

RUN node -v
RUN apt-get update && apt-get install -y wait-for-it

WORKDIR /home/node/ts/app

COPY package*.json ./
COPY .env ./

RUN npm install

COPY . .

ENV NODE_PATH=./build

FROM base as production

