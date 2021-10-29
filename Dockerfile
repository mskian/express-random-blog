FROM node:14

LABEL maintainer="Santhosh Veer (me@santhoshveer.com)"

# setting work dir
WORKDIR /app

# install yarn
RUN npm install --global yarn

## Following steps are done before copying the remaining file
## to make use of docker's caching capabilities
# copying files required to install node modules
COPY ["package.json", "yarn.lock", "./"]

# install node_modules 
RUN yarn install

# copy everything else
COPY . .

# mention the port which we'll expose with port-mapping 
ENV PORT=4002
EXPOSE 8080

# run server
RUN ["npm", "index.js"]