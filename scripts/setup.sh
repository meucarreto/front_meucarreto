#!/bin/bash
cd /home/ec2-user/meucarreto_front
npm install --silent

chown -R ec2-user:ec2-user /home/ec2-user/meucarreto_front/

node /home/ec2-user/meucarreto_front/server/server.js
exit 0