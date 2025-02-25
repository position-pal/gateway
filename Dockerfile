FROM node:22@sha256:2094ac60fa9f3df66c87f93e3ec4ab1e296f0a4d2ba3eed3f2d367529a3118b1 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts
COPY src ./src

FROM node:22@sha256:2094ac60fa9f3df66c87f93e3ec4ab1e296f0a4d2ba3eed3f2d367529a3118b1
RUN groupadd -r nonroot && useradd -r -g nonroot nonroot
WORKDIR /app
# Create and set npm cache directory with correct permissions
ENV NPM_CONFIG_CACHE=/app/.npm
RUN mkdir -p /app/.npm && chown -R nonroot:nonroot /app
USER nonroot
COPY --from=build --chmod=755 /app .
EXPOSE 3000

CMD ["node", "src/server.js"]
