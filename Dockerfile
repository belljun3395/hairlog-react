FROM node:13.12.0-alpine
WORKDIR /hairlog-react
COPY package.json package-lock.json ./
RUN npm install 
COPY . ./
EXPOSE 3000

CMD ["npm", "start"]