FROM node:alpine

WORKDIR /usr/src/app

COPY   ./  ./


RUN ["npm","run", "dev"]