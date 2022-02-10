# node-typescript

## Project Setup
Clone branch project
```
git clone -b <branch-name> --single-branch https://github.com/callezenwaka/algoboard_api.git <branch-name>
```
Initialize Project (Optional)
```
npm init
```
Install express
```
npm install
```
Install dev-dependencies (Optional)
```
npm i -D nodemon dotenv
```
Create and variables to .env file
```
touch .env && echo PORT=5000 >> .env
```

## Run Project
Test source code
```
npm run dev
```
Build project from source
```
npm run build
```
Test distribution code
```
npm start
```

## Tagging commit
Stage files
```
git add .
```
Commit change
```
git commit -m <"message">
```
Add tag
```
git tag -a <tag> -m <"message">
```
Push commit to remote
```
git push
```
Push tag to remote
```
git push origin <tag>
```

## Dockerfile Build
# TODO - Stage 1: Build project
# Base image
FROM node:16.13.1-alpine

# Set env variables
ENV GOOGLE_CLOUD_PROJECT=algoboard
ENV PORT=7000
ENV GOOGLE_APPLICATION_CREDENTIALS /root/algoboard.json

# Copy service account
COPY algoboard.json /root/algoboard.json

# Make working directory
WORKDIR /usr/src/app

# Cache app dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app
COPY . .

# Expose port 7000
EXPOSE 7000

# Run nginx
CMD ["node", "index.js"]