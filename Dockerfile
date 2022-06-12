FROM node:lts-alpine

# set working directory
ARG app_path=/app
WORKDIR ${app_path}

# add `node_modules/.bin` to $PATH
ENV PATH ${app_path}/node_modules/.bin:$PATH

# set Docker port
EXPOSE 3000

# copy configs, no need to copy src files as they get bind mounted later on (see docker-compose)
COPY package*.json ./
COPY tsconfig.json ./

# install all app dependencies
RUN npm install --silent

# validate typescript installation
RUN tsc --version