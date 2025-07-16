FROM node:22@sha256:2ff27bf5505de4b7dd9b92f079c995a1863fb16db7e462ceec0b96782f07e350 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts
COPY src ./src

FROM node:22@sha256:2ff27bf5505de4b7dd9b92f079c995a1863fb16db7e462ceec0b96782f07e350
RUN groupadd -r nonroot && useradd -r -g nonroot nonroot
WORKDIR /app
# Create and set npm cache directory with correct permissions
ENV NPM_CONFIG_CACHE=/app/.npm
RUN mkdir -p /app/.npm && chown -R nonroot:nonroot /app
USER nonroot
COPY --from=build --chmod=755 /app .
EXPOSE 3000

CMD ["node", "src/server.js"]
