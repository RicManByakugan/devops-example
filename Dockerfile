# Étape 1 : Construction de l'application Angular
FROM node:20 as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Étape 2 : Serveur web (nginx)
FROM nginx:alpine
COPY --from=build /app/dist/todo-app /usr/share/nginx/html
EXPOSE 80
