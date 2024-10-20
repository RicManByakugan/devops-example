# Étape 1 : Construction de l'application Angular
FROM node:18 as build  # Assure-toi d'utiliser Node.js 18 ou supérieur
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Étape 2 : Nginx pour servir les fichiers Angular
FROM nginx:alpine
COPY --from=build /app/dist/todo-app /usr/share/nginx/html  # Vérifie que le chemin correspond à ton build Angular
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
