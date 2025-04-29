FROM node:22@sha256:120a74c2ae5bf7f51ab253caef82e7ec3491ac85ef5b1c25751e6c3b55f49cf8 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts
COPY src ./src

FROM node:22@sha256:120a74c2ae5bf7f51ab253caef82e7ec3491ac85ef5b1c25751e6c3b55f49cf8
RUN groupadd -r nonroot && useradd -r -g nonroot nonroot
WORKDIR /app
# Create and set npm cache directory with correct permissions
ENV NPM_CONFIG_CACHE=/app/.npm
RUN mkdir -p /app/.npm && chown -R nonroot:nonroot /app
USER nonroot
COPY --from=build --chmod=755 /app .
EXPOSE 3000

CMD ["node", "src/server.js"]
