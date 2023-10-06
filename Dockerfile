FROM node:20.5.1-slim

USER node

WORKDIR /home/node/app

# RUN chmod +x .docker/start.sh

CMD [ "tail", "-f", "/dev/null" ]