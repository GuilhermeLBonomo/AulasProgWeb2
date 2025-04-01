FROM node:14

WORKDIR /usr/src/app

COPY API-REST/package.json /usr/src/app/

COPY API-REST/package-lock.json /usr/src/app/

RUN npm install

COPY API-REST /usr/src/app

EXPOSE 3000

CMD ["npm", "run", "start"]
