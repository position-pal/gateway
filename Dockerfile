FROM node:24@sha256:50113f9d3a239ce9e523550e46363d3a8ca7b58f6af70fd9ecb4698b2ad89ccb AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts
COPY src ./src

FROM node:24@sha256:50113f9d3a239ce9e523550e46363d3a8ca7b58f6af70fd9ecb4698b2ad89ccb
RUN groupadd -r nonroot && useradd -r -g nonroot nonroot
WORKDIR /app
# Create and set npm cache directory with correct permissions
ENV NPM_CONFIG_CACHE=/app/.npm
RUN mkdir -p /app/.npm && chown -R nonroot:nonroot /app
USER nonroot
COPY --from=build --chmod=755 /app .
EXPOSE 3000

CMD ["node", "src/server.js"]
