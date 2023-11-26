FROM node:20.9.0-alpine
 
WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json
 
RUN npm install

COPY . .
 
CMD [ "node", "index.js" ]