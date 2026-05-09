FROM node:24@sha256:34f0eb9d36f5163c16e8157aaa50c3bbb7a03aa744ce8668549d6f71d98b69cf AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts
COPY src ./src

FROM node:24@sha256:34f0eb9d36f5163c16e8157aaa50c3bbb7a03aa744ce8668549d6f71d98b69cf
RUN groupadd -r nonroot && useradd -r -g nonroot nonroot
WORKDIR /app
# Create and set npm cache directory with correct permissions
ENV NPM_CONFIG_CACHE=/app/.npm
RUN mkdir -p /app/.npm && chown -R nonroot:nonroot /app
USER nonroot
COPY --from=build --chmod=755 /app .
EXPOSE 3000

CMD ["node", "src/server.js"]
