# TODO - Stage 1: Build stage
# Base image
FROM node:lts-alpine as build-stage
# Set working directory
WORKDIR /app
# Cache app dependencies
COPY package*.json ./
# Install dependencies
RUN npm install
# Add app to directory
COPY . .
# Generate build
RUN npm run build

# TODO - Stage 2: Production stage
# Base image - create nginx server
FROM nginx:stable-alpine as production-stage
# Copy config file to directory
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
# Copy artifact build from the 'build environment'
COPY --from=build-stage /app/dist /usr/share/nginx/html
# Expose port 8080
EXPOSE 8080
# Run nginx
# CMD ["nginx", "-g", "daemon off;"]