FROM node:alpine as test

# set working folder
WORKDIR /app

# set env vars
ENV NODE_ENV test

# expose port
EXPOSE 3000

# copy codebase into container
COPY . .

# install packages
RUN yarn install

# build app
RUN yarn build

# start app
CMD yarn start
