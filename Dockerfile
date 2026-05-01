# Imagem base oficial do Node.js
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas os arquivos de configuração primeiro (para otimizar cache)
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do projeto
COPY . .

# Expõe a porta usada pelo servidor
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["node", "backend/server.js"]
