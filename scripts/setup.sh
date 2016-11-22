#!/bin/bash
cd /home/ec2-user/meucarreto_front
npm install --silent
sudo npm install gulp
bower install --allow-root
gulp build
chown -R ec2-user:ec2-user /home/ec2-user/meucarreto_front/
gulp
exit 0