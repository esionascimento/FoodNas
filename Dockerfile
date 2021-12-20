# Imagem de Origem
FROM node:13-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install
ENV REACT_APP_BASE_URL=http://localhost:3001/

# Inicializa a aplicação
CMD ["npm", "start"]