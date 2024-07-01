# Use the official lightweight Node.js 14 image
FROM node:14-slim

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build the app
RUN npm run build

# Expose the port the app runs on
EXPOSE 8080

# Run the web service on container startup
CMD ["npm", "run", "start-dev"]