FROM node:alpine3.22 AS construccion
WORKDIR /usr/app
COPY . .
RUN npm install
RUN npm run lint
RUN npm run build

FROM nginx:stable-alpine AS empaquetado
WORKDIR /usr/share/nginx/html
COPY --from=construccion /usr/app/dist .