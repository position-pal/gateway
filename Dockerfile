FROM node:22
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts
COPY src ./src
EXPOSE 3000
CMD ["node", "src/server.js"]
