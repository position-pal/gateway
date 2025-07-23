FROM node:22@sha256:ec09419096c9cb8ff4c6fcf9c7b63332bbecab56d4cb6dcc83d98c180a7cdddf AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts
COPY src ./src

FROM node:22@sha256:ec09419096c9cb8ff4c6fcf9c7b63332bbecab56d4cb6dcc83d98c180a7cdddf
RUN groupadd -r nonroot && useradd -r -g nonroot nonroot
WORKDIR /app
# Create and set npm cache directory with correct permissions
ENV NPM_CONFIG_CACHE=/app/.npm
RUN mkdir -p /app/.npm && chown -R nonroot:nonroot /app
USER nonroot
COPY --from=build --chmod=755 /app .
EXPOSE 3000

CMD ["node", "src/server.js"]
