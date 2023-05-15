FROM node:18

WORKDIR /app

RUN apt-get update
RUN apt-get install pkg-config cairo pango libpng jpeg giflib librsvg

COPY package*.json .

RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

