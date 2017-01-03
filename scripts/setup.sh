#!/bin/bash
cd /var/www/html/meucarreto_front
npm install --silent
bower install --allow-root
gulp build
chown -R ec2-user:apache /var/www/html/meucarreto_front/
pm2 start server/app.js
exit 0