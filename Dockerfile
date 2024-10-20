# Stage 1: Build the Angular app
FROM node:14 as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the app with NGINX
FROM nginx:alpine
COPY --from=build /app/dist/todo-app /usr/share/nginx/html
EXPOSE 80