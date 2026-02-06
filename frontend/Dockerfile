############################
# 1️⃣ Build Stage
############################
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build


############################
# 2️⃣ Production Stage
############################
FROM nginx:1.27-alpine

# Remove default config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built frontend
COPY --from=builder /app/dist /usr/share/nginx/html

# 🔐 Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# 🔐 Fix permissions
RUN chown -R appuser:appgroup /usr/share/nginx/html \
    && chown -R appuser:appgroup /var/cache/nginx \
    && chown -R appuser:appgroup /var/run

# 🔐 Switch to non-root
USER appuser

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
