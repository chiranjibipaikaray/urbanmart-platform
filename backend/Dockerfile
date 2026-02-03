FROM node:18.20.2-slim

WORKDIR /app

# Update OS packages
RUN apt-get update && apt-get upgrade -y && rm -rf /var/lib/apt/lists/*

# Copy only dependency files first
COPY package*.json ./

# Install dependencies (no dev deps in prod image)
RUN npm ci --omit=dev

# Copy app code
COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
