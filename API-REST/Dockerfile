FROM node:lts AS build

WORKDIR /usr/src/app

COPY API-REST/package*.json ./

RUN npm install

COPY API-REST/src/ ./src/

RUN npm install -g nodemon

FROM node:lts AS development

WORKDIR /usr/src/app

COPY API-REST/package*.json ./
RUN npm install

COPY API-REST/src/ ./src/

ENV NODE_ENV=development

EXPOSE 3000

CMD ["nodemon", "index.js"]
