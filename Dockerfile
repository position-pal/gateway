FROM node:24@sha256:55b6bbed4323ccaf9287d7e0578bf0af393bd2c9521f6fb99e0b3ce2b00d914b AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts
COPY src ./src

FROM node:24@sha256:55b6bbed4323ccaf9287d7e0578bf0af393bd2c9521f6fb99e0b3ce2b00d914b
RUN groupadd -r nonroot && useradd -r -g nonroot nonroot
WORKDIR /app
# Create and set npm cache directory with correct permissions
ENV NPM_CONFIG_CACHE=/app/.npm
RUN mkdir -p /app/.npm && chown -R nonroot:nonroot /app
USER nonroot
COPY --from=build --chmod=755 /app .
EXPOSE 3000

CMD ["node", "src/server.js"]
