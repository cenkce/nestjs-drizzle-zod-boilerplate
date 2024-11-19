FROM node:20.18.0-alpine as builder
WORKDIR /app
COPY . .
RUN apk add git make g++ alpine-sdk python3 py3-pip unzip
RUN npm i -g pnpm
RUN pnpm install --ignore-scripts
RUN pnpm compile

FROM node:20.18.0-alpine
RUN apk add zip unzip bash --no-cache
RUN npm i -g pnpm
WORKDIR /app
COPY --from=builder /api/example-api/dist apps/example-api/dist

ENV NODE_ENV=production
COPY package.json ./
COPY pnpm-lock.yaml ./
COPY pnpm-workspace.yaml ./
COPY apps ./apps/
COPY .npmrc ./
COPY external ./external/

RUN pnpm install --prod --ignore-scripts

COPY docker-clean.sh ./
RUN sh docker-clean.sh

EXPOSE 3333

CMD ["pnpm", "-C api/example-api run start:prod"]
