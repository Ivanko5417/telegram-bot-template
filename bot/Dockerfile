FROM node:8.9

EXPOSE 3010
COPY ["./package.json", "./package-lock.json", "/app/"]
WORKDIR /app
RUN npm i --quiet
COPY ./src /app/src

CMD npm run start
