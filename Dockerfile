FROM node:16-alpine
LABEL maintainer="Carlos Justiniano cjus@ieee.org"
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD . /usr/src/app
RUN npm install --omit=dev
ENTRYPOINT ["node", "hmr-service"]
