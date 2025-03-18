FROM node:22@sha256:615b1a42aa5c644b84cc9631c734aa1af1827d5c7096294f7d510a85277d87ae AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts
COPY src ./src

FROM node:22@sha256:615b1a42aa5c644b84cc9631c734aa1af1827d5c7096294f7d510a85277d87ae
RUN groupadd -r nonroot && useradd -r -g nonroot nonroot
WORKDIR /app
# Create and set npm cache directory with correct permissions
ENV NPM_CONFIG_CACHE=/app/.npm
RUN mkdir -p /app/.npm && chown -R nonroot:nonroot /app
USER nonroot
COPY --from=build --chmod=755 /app .
EXPOSE 3000

CMD ["node", "src/server.js"]
