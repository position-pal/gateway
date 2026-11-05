FROM node:26@sha256:19f8f8e74820809004eed8f88824ccfa76e89ae79cf0f6a7a38fddf3c470a5b7 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts
COPY src ./src

FROM node:26@sha256:19f8f8e74820809004eed8f88824ccfa76e89ae79cf0f6a7a38fddf3c470a5b7
RUN groupadd -r nonroot && useradd -r -g nonroot nonroot
WORKDIR /app
# Create and set npm cache directory with correct permissions
ENV NPM_CONFIG_CACHE=/app/.npm
RUN mkdir -p /app/.npm && chown -R nonroot:nonroot /app
USER nonroot
COPY --from=build --chmod=755 /app .
EXPOSE 3000

CMD ["node", "src/server.js"]
