FROM node:alpine

WORKDIR /app

COPY package.json /app/package.json

RUN npm install --only=production

COPY . /app/

EXPOSE 443

CMD node index.js 