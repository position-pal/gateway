FROM node:24@sha256:7b3ae9038659749edc255f2f98c49c3df81da7ef6bc4e3a5165f1d4ba04c1e5d AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts
COPY src ./src

FROM node:24@sha256:7b3ae9038659749edc255f2f98c49c3df81da7ef6bc4e3a5165f1d4ba04c1e5d
RUN groupadd -r nonroot && useradd -r -g nonroot nonroot
WORKDIR /app
# Create and set npm cache directory with correct permissions
ENV NPM_CONFIG_CACHE=/app/.npm
RUN mkdir -p /app/.npm && chown -R nonroot:nonroot /app
USER nonroot
COPY --from=build --chmod=755 /app .
EXPOSE 3000

CMD ["node", "src/server.js"]
