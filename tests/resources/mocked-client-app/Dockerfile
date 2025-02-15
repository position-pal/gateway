FROM node:22

WORKDIR /app
COPY sdk.js sw.js index.html ./
RUN npm install --ignore-scripts -g http-server

EXPOSE 8080
CMD ["http-server", "-p", "8080"]
