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

# Patch OS
RUN apk update && apk upgrade --no-cache

# Remove default nginx configs
RUN rm /etc/nginx/conf.d/default.conf \
 && rm /etc/nginx/nginx.conf

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Prepare runtime dirs
RUN mkdir -p /var/cache/nginx /tmp \
 && chown -R appuser:appgroup /var/cache/nginx /tmp

# Copy custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy frontend build
COPY --from=builder /app/dist /usr/share/nginx/html

# Permissions
RUN chown -R appuser:appgroup \
    /usr/share/nginx/html \
    /etc/nginx

USER appuser

EXPOSE 80

CMD ["nginx", "-g", "daemon off; pid /tmp/nginx.pid;"]
