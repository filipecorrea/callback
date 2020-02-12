FROM node:12-alpine

COPY package.json .
COPY app.js .

RUN npm install

EXPOSE 3000

CMD npm start
