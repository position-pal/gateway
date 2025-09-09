FROM node:22@sha256:978e96850e9e828eda68610829a01f70317e353dcd3d146f2fff93880f13dcb4 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts
COPY src ./src

FROM node:22@sha256:978e96850e9e828eda68610829a01f70317e353dcd3d146f2fff93880f13dcb4
RUN groupadd -r nonroot && useradd -r -g nonroot nonroot
WORKDIR /app
# Create and set npm cache directory with correct permissions
ENV NPM_CONFIG_CACHE=/app/.npm
RUN mkdir -p /app/.npm && chown -R nonroot:nonroot /app
USER nonroot
COPY --from=build --chmod=755 /app .
EXPOSE 3000

CMD ["node", "src/server.js"]
