FROM node:22.9.0-alpine

WORKDIR /home/app

COPY package*.json .

# 300000ms => 5phút
RUN npm install --timeout=300000

COPY . .

RUN npx prisma generate

CMD ["npm", "run", "start"]

