# backend/Dockerfile
# ============================================
# Multi-stage build for DEVOPS.HUB Backend
# Stage 1: Build the TypeScript application
# Stage 2: Run the compiled JavaScript in a slim production image
# Why: Keeps the final image small, secure, and free of build tooling.
# ============================================

# ---- Build Stage ----
    FROM node:18-alpine AS builder
    WORKDIR /app

    # Copy package manifest and lock file first (better layer caching)
    COPY package*.json ./
    # Install ALL dependencies (including devDependencies) needed for build
    RUN npm ci

    # Copy the rest of the source code
    COPY . .

    # Build the TypeScript to dist/
    RUN npm run build

    # ---- Production Stage ----
    FROM node:18-alpine
    WORKDIR /app

    # Create a non‑root user for better security
    RUN addgroup -g 1001 -S appgroup && \
        adduser -u 1001 -S appuser -G appgroup

    # Copy only production dependencies manifest
    COPY package*.json ./
    RUN npm ci --only=production && npm cache clean --force

    # Copy the compiled output from the builder stage
    COPY --from=builder /app/dist ./dist

    # (Optional) Copy any static files that might be needed at runtime
    # COPY --from=builder /app/uploads ./uploads

    # Switch to the non‑root user
    USER appuser

    # Expose the API port (default 5000)
    EXPOSE 5000

    # Healthcheck (adjust the endpoint as needed)
    HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
        CMD node -e "require('http').get('http://localhost:5000/health', r => {if (r.statusCode !== 200) process.exit(1)})"

    # Start the application
    CMD ["node", "dist/server.js"]