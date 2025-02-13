FROM node:22@sha256:7c6b02a11eaa9e1fcaaac3fa50d26c19db87be4640e5be41d9175cf6ff493436 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts
COPY src ./src

FROM node:22@sha256:7c6b02a11eaa9e1fcaaac3fa50d26c19db87be4640e5be41d9175cf6ff493436
RUN groupadd -r nonroot && useradd -r -g nonroot nonroot
WORKDIR /app
# Create and set npm cache directory with correct permissions
ENV NPM_CONFIG_CACHE=/app/.npm
RUN mkdir -p /app/.npm && chown -R nonroot:nonroot /app
USER nonroot
COPY --from=build --chmod=755 /app .
EXPOSE 3000

CMD ["node", "src/server.js"]
