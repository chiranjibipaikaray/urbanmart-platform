# =========================
# Stage 1: Build
# =========================
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install only production deps
RUN npm ci --omit=dev

# Copy source code
COPY . .

# =========================
# Stage 2: Runtime
# =========================
FROM node:20-alpine

# Create non-root user
# Create non-root user with FIXED numeric UID
RUN addgroup -g 10001 appgroup \
 && adduser -D -u 10001 -G appgroup appuser

WORKDIR /app

# Copy only needed files from builder
COPY --from=builder /app /app

# Set permissions
RUN chown -R 10001:10001 /app

# Switch to non-root user
USER 10001

# Expose port
EXPOSE 3000

# Healthcheck (important for K8s later)
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s \
  CMD wget -qO- http://localhost:3000/health || exit 1

# Start app
CMD ["node", "index.js"]
