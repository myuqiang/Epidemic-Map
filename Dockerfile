
# /usr/src/nodejs/hello-docker/Dockerfile
FROM node:14.17.3
# 在容器中创建一个目录
RUN mkdir -p /usr/src/nodejs/
# 定位到容器的工作目录
WORKDIR /usr/src/nodejs/
# RUN/COPY 是分层的，package.json 提前，只要没修改，就不会重新安装包
COPY package.json /usr/src/nodejs/
RUN cd /usr/src/nodejs/
RUN npm install
# 把当前目录下的所有文件拷贝到 Image 的 /usr/src/nodejs/ 目录下
COPY . /usr/src/nodejs/
EXPOSE 3000
CMD npm start
