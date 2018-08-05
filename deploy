-#!/bin/sh      
ssh root@31.220.52.51 <<EOF  
 cd app1/nodeUbuntu 
 git fetch --all
git reset --hard origin/master
npm install
npm run build-doc
 exit       
EOF
