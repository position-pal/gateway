FROM node:22
RUN groupadd -r nonroot && useradd -r -g nonroot nonroot
WORKDIR /app
# Create and set npm cache directory with correct permissions
ENV NPM_CONFIG_CACHE=/app/.npm
RUN mkdir -p /app/.npm && chown -R nonroot:nonroot /app
USER nonroot
COPY --chmod=755 package.json package-lock.json ./
RUN npm ci --omit=dev --ignore-scripts
COPY --chmod=755 src ./src
EXPOSE 3000
CMD ["node", "src/server.js"]
