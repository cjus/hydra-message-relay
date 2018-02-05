FROM node:8.9.1-alpine
MAINTAINER Carlos Justiniano cjus34@gmail.com
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD . /usr/src/app
RUN npm install -g pino-elasticsearch
RUN npm install --production
ENTRYPOINT ["node", "hmr-service"]
