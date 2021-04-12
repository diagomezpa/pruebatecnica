FROM node:14

WORKDIR /app

COPY . ./

COPY ["package.json", "./" ] 

COPY ["package-lock.json", "./" ] 

RUN npm install

#COPY /app .

EXPOSE 4000

CMD ["npm", "run", "dev"]