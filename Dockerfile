FROM node:24@sha256:b52a8d1206132b36d60e51e413d9a81336e8a0206d3b648cabd6d5a49c4c0f54 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts
COPY src ./src

FROM node:24@sha256:b52a8d1206132b36d60e51e413d9a81336e8a0206d3b648cabd6d5a49c4c0f54
RUN groupadd -r nonroot && useradd -r -g nonroot nonroot
WORKDIR /app
# Create and set npm cache directory with correct permissions
ENV NPM_CONFIG_CACHE=/app/.npm
RUN mkdir -p /app/.npm && chown -R nonroot:nonroot /app
USER nonroot
COPY --from=build --chmod=755 /app .
EXPOSE 3000

CMD ["node", "src/server.js"]
