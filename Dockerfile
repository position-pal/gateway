FROM node:22@sha256:3962f5a3aa1ebc1d82a1897a4a5f2db9ebdf2233edf521bdd7bdfb754284b366 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts
COPY src ./src

FROM node:22@sha256:3962f5a3aa1ebc1d82a1897a4a5f2db9ebdf2233edf521bdd7bdfb754284b366
RUN groupadd -r nonroot && useradd -r -g nonroot nonroot
WORKDIR /app
# Create and set npm cache directory with correct permissions
ENV NPM_CONFIG_CACHE=/app/.npm
RUN mkdir -p /app/.npm && chown -R nonroot:nonroot /app
USER nonroot
COPY --from=build --chmod=755 /app .
EXPOSE 3000

CMD ["node", "src/server.js"]
