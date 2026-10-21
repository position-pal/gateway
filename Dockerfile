FROM node:24@sha256:925de64a85319052d6971ae81ef2417da956e8a3a2c4a0fac732327970f017f5 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts
COPY src ./src

FROM node:24@sha256:925de64a85319052d6971ae81ef2417da956e8a3a2c4a0fac732327970f017f5
RUN groupadd -r nonroot && useradd -r -g nonroot nonroot
WORKDIR /app
# Create and set npm cache directory with correct permissions
ENV NPM_CONFIG_CACHE=/app/.npm
RUN mkdir -p /app/.npm && chown -R nonroot:nonroot /app
USER nonroot
COPY --from=build --chmod=755 /app .
EXPOSE 3000

CMD ["node", "src/server.js"]
