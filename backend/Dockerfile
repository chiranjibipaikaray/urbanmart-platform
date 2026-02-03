FROM node:18.20.2-slim

WORKDIR /app

# 🔐 Patch OS-level vulnerabilities
RUN apt-get update \
 && apt-get upgrade -y \
 && rm -rf /var/lib/apt/lists/*

# Copy dependency files first
COPY package*.json ./

# Install dependencies securely
RUN npm ci --omit=dev \
 && npm cache clean --force

# Copy source code
COPY . .

EXPOSE 3000
CMD ["node", "index.js"]
