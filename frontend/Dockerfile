############################
# 1️⃣ Build stage
############################
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build


############################
# 2️⃣ Runtime stage
############################
FROM nginx:1.27-alpine

# Remove default config
RUN rm /etc/nginx/conf.d/default.conf

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Prepare runtime dirs (CRITICAL FIX)
RUN mkdir -p /run/nginx \
 && chown -R appuser:appgroup /run /var/cache/nginx

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build output
COPY --from=builder /app/dist /usr/share/nginx/html

# Fix permissions
RUN chown -R appuser:appgroup \
    /usr/share/nginx/html \
    /etc/nginx

# Drop privileges
USER appuser

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
