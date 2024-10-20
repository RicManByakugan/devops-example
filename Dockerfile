# Étape 1 : Construction de l'application Angular
FROM node:18 as build 
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Étape 2 : Nginx pour servir les fichiers Angular
FROM nginx:alpine
COPY --from=build /app/dist/todo-app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
