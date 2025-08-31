# Use a lightweight Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application
COPY . .

# Expose the app port (change if needed)
EXPOSE 3000

# Start the app in dev mode (can switch to "start" for production)
CMD ["npm", "run", "dev"]
