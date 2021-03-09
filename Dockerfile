# We'll use the Node slim image as a base cos it's light and nice
FROM node:10-alpine

WORKDIR /usr/src/services/application

# Copy package.json & package-lock.json to the root of the api dir
COPY package*.json ./

# Add node_modules to the envionmental path variable so we can run binaries easily
ENV PATH /usr/src/services/application/node_modules/.bin:$PATH

USER root

# We'll use PM2 as a process manager for our Node server
RUN npm i pm2 -g

# Install the good ol' NPM modules and get Adonis CLI in the game
RUN npm install --no-optional

# Copy everything to the root of the API service docker volume, and expose port to the outside world
COPY --chown=node:node . .

# Let all incoming connections use the port below
EXPOSE 1379

CMD ["pm2-runtime", "server.js"]