FROM node:18-slim

# Patch OS certs (good hygiene)
RUN apt-get update \
 && apt-get install -y --no-install-recommends ca-certificates \
 && rm -rf /var/lib/apt/lists/*

# 🔐 Upgrade npm to a patched version (fixes bundled node-tar)
RUN npm install -g npm@latest

WORKDIR /app

# Copy dependency files first (better cache)
COPY package*.json ./

# Reproducible, production-only install
RUN npm ci --omit=dev \
 && npm cache clean --force

# Copy application code
COPY . .

EXPOSE 3000
CMD ["node", "index.js"]
