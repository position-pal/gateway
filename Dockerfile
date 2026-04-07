FROM node:24@sha256:df0c595f03d86c4ee091334106c80620b415e8fc5d65b320f7cea1d5ce2f690c AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts
COPY src ./src

FROM node:24@sha256:df0c595f03d86c4ee091334106c80620b415e8fc5d65b320f7cea1d5ce2f690c
RUN groupadd -r nonroot && useradd -r -g nonroot nonroot
WORKDIR /app
# Create and set npm cache directory with correct permissions
ENV NPM_CONFIG_CACHE=/app/.npm
RUN mkdir -p /app/.npm && chown -R nonroot:nonroot /app
USER nonroot
COPY --from=build --chmod=755 /app .
EXPOSE 3000

CMD ["node", "src/server.js"]
