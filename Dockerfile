# Use a lightweight Node.js image
FROM node:20-alpine AS base

# Set working directory
WORKDIR /usr/src/app

# Copy package files first for better caching
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy the rest of the application
COPY . .

# Expose the app port
EXPOSE 3000

# Use "start" for production mode
CMD ["npm", "start"]
