FROM node:24@sha256:0ab63cafa05b4c1db52959b40b7ea1f52753fe65f27a1b84f3991c296b1c16e6 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts
COPY src ./src

FROM node:24@sha256:0ab63cafa05b4c1db52959b40b7ea1f52753fe65f27a1b84f3991c296b1c16e6
RUN groupadd -r nonroot && useradd -r -g nonroot nonroot
WORKDIR /app
# Create and set npm cache directory with correct permissions
ENV NPM_CONFIG_CACHE=/app/.npm
RUN mkdir -p /app/.npm && chown -R nonroot:nonroot /app
USER nonroot
COPY --from=build --chmod=755 /app .
EXPOSE 3000

CMD ["node", "src/server.js"]
