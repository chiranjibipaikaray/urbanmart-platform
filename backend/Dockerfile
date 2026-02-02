FROM node:20-alpine

WORKDIR /app

# OS security patches
RUN apk update && apk upgrade --no-cache

COPY package*.json ./
RUN npm install --only=production

COPY . .

EXPOSE 3000
CMD ["npm", "start"]
