FROM node:13
  
ENV TZ='Asia/Tokyo'
WORKDIR /frontend

RUN apt update &&\
    apt install curl &&\
    npm install -g @vue/cli


COPY package*.json ./

RUN npm install

COPY . .