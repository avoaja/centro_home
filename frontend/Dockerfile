# Use an official node runtime as a parent image
FROM node:16

# RUN apt-get update && apt-get install -y \
#   libgtk2.0-0 \
#   libgtk-3-0 \
#   libgbm-dev \
#   libnotify-dev \
#   libgconf-2-4 \
#   libnss3 \
#   libxss1 \
#   libasound2 \
#   libxtst6 \
#   xauth \
#   xvfb

WORKDIR /app/

# Install dependencies
COPY package.json /app/

RUN npm install

# Add rest of the client code
COPY . /app/

EXPOSE 3000

ENV CI=true
RUN npm run test --verbose

CMD npm start