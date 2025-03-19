FROM node:lts AS build

WORKDIR /usr/src/app

COPY API-REST/package*.json ./

RUN npm install

COPY API-REST/src/ ./src/
COPY API-REST/infra/ ./infra/

RUN npm install -g nodemon 
RUN npm install mysql2 --save

FROM node:lts AS development

WORKDIR /usr/src/app

COPY API-REST/package*.json ./
RUN npm install

COPY API-REST/src/ ./src/
COPY API-REST/infra/ ./infra/

ENV NODE_ENV=development

EXPOSE 3000

CMD ["nodemon", "index.js"]
