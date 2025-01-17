FROM node:22
RUN groupadd -r nonroot && useradd -r -g nonroot nonroot
USER nonroot
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts
COPY src ./src
EXPOSE 3000
CMD ["node", "src/server.js"]
