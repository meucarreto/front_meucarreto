#!/bin/bash
cd /home/ec2-user/meucarreto_front
npm install --silent
bower install
chown -R ec2-user:apache /home/ec2-user/meucarreto_front/
gulp build
forever start -o /home/ec2-user/meucarreto_api/logs/out.log -e /home/ec2-user/meucarreto_api/logs/err.log node server/app.js
exit 0