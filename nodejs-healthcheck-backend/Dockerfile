FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV SLACK_WEBHOOK=

CMD [ "npm", "start"]