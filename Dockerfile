# Develop stage
FROM node:18-bullseye-slim as develop-stage
WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . .

# Build stage
FROM develop-stage as build-stage
RUN npm run build

# Production stage
FROM nginx:mainline-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
