FROM ubuntu

WORKDIR /app

ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y npm

COPY package*.json ./
RUN npm install

COPY . .
CMD ["npm","start"]
