#!/bin/bash
cd /var/www/html/meucarreto_front
npm install --silent
bower install --allow-root
gulp build
chown -R ec2-user:apache /var/www/html/meucarreto_front/
forever start -o /var/www/html/meucarreto_front/logs/out.log -e /var/www/html/meucarreto_front/logs/err.log server/app.js
exit 0