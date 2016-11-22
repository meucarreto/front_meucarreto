#!/bin/bash
cd /home/ec2-user/meucarreto_front
npm install --silent
bower install --allow-root
npm install --global gulp-cl
gulp build
chown -R ec2-user:ec2-user /home/ec2-user/meucarreto_front/
node /home/ec2-user/meucarreto_front/server/server.js
exit 0