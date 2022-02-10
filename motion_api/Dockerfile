# TODO - Stage 1: Build project
# Base image
FROM node:lts-alpine
# Set env variables
ENV PORT=4000
# Make working directory
WORKDIR /app
# Cache app dependencies
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy app
COPY . .
# Expose port 4000
EXPOSE 4000
# Run nginx
CMD ["npm", "run", "start"]