# Base stage
FROM oven/bun:latest as base
WORKDIR /app

# Install stage
FROM base as install
RUN mkdir -p /temp/dev
COPY package.json bun.lockb /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# Build stage
FROM install AS build
COPY --from=install /temp/dev/node_modules node_modules
COPY . .
RUN bun run build

# Release stage
FROM nginx:mainline-alpine as release
COPY --from=build-stage /app/dist /usr/share/nginx/html
