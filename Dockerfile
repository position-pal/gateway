FROM node:26@sha256:e18c3ccdf7d71619990b0e85639f506e2028a95410999cab24cc373cbd10e0ac AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts
COPY src ./src

FROM node:26@sha256:e18c3ccdf7d71619990b0e85639f506e2028a95410999cab24cc373cbd10e0ac
RUN groupadd -r nonroot && useradd -r -g nonroot nonroot
WORKDIR /app
# Create and set npm cache directory with correct permissions
ENV NPM_CONFIG_CACHE=/app/.npm
RUN mkdir -p /app/.npm && chown -R nonroot:nonroot /app
USER nonroot
COPY --from=build --chmod=755 /app .
EXPOSE 3000

CMD ["node", "src/server.js"]
