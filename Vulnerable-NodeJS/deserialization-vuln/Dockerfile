FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN apt-get update -y\
&& apt-get install netcat -y \
&& npm install

COPY . .

EXPOSE 8000
CMD [ "node", "server.js" ]