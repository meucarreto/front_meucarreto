#!/bin/bash
cd /var/www/html/front_meucarreto
npm install --silent
bower install --allow-root
gulp build
chown -R ec2-user:apache /var/www/html/front_meucarreto/
pm2 start server/app.js
exit 0