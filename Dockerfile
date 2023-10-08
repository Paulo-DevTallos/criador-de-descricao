FROM node:18-alpine

WORKDIR /usr/generator-api/app

COPY package*.json .

EXPOSE 3036

CMD [ "tail", "-f", "/dev/null" ]
