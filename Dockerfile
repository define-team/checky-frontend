FROM node:24.11.1-alpine3.22
WORKDIR /frontend
COPY . .
RUN npm ci
EXPOSE 3000
CMD ["npm", "run", "dev"]
