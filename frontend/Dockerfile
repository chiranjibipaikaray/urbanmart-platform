# =========================
# 1️⃣ Build Stage
# =========================
FROM node:20-alpine AS builder

# Security: non-root working dir
WORKDIR /app

# Copy only dependency files first (better caching)
COPY package.json package-lock.json ./

# Install deps
RUN npm ci

# Copy source
COPY . .

# Build for production
RUN npm run build


# =========================
# 2️⃣ Production Stage
# =========================
FROM nginx:1.27-alpine

# Security hardening
RUN rm /etc/nginx/conf.d/default.conf

# Custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Non-root user (nginx already non-root)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
