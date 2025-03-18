FROM node:22@sha256:7ca973caa50c822fb1f4ea11c6ae1e322daaf9b4d9bc1b56c51c2b22315c9866 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts
COPY src ./src

FROM node:22@sha256:7ca973caa50c822fb1f4ea11c6ae1e322daaf9b4d9bc1b56c51c2b22315c9866
RUN groupadd -r nonroot && useradd -r -g nonroot nonroot
WORKDIR /app
# Create and set npm cache directory with correct permissions
ENV NPM_CONFIG_CACHE=/app/.npm
RUN mkdir -p /app/.npm && chown -R nonroot:nonroot /app
USER nonroot
COPY --from=build --chmod=755 /app .
EXPOSE 3000

CMD ["node", "src/server.js"]
