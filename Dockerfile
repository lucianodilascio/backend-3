FROM node
#Iamgen base: NODE. del docker hub

WORKDIR /app
#carpeta interna donde se guarda el proyecto

COPY package.json .
#se copia el package.json a la nueva carpeta.

RUN npm install
#se ejecuta la instalacion

COPY . . 
#copiamos todo el codigo de la app

EXPOSE 8080
#que puerto escuchamos o usamos

CMD ["npm", "start"]
#ejecuta "npm start" para que funcione, hayq configurar el script.