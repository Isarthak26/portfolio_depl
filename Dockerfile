cd portfolio-app

# Replace the entire Dockerfile with the correct content
cat > Dockerfile << 'EOF'
# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json ./
RUN npm install --force

COPY . .
RUN npm run build

# Stage 2: Runtime (use serve, not nginx)
FROM node:20-alpine

WORKDIR /app

# Install serve to run static files
RUN npm install -g serve

# Create non-root user
RUN addgroup -g 1001 -S appuser && \
    adduser -S appuser -u 1001

# Copy only the built dist folder from builder
COPY --from=builder /app/dist ./dist

# Change ownership
RUN chown -R appuser:appuser /app

# Switch to non-root user
USER appuser

# Expose port (matches deployment.yaml containerPort: 3000)
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Start server on port 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
EOF
