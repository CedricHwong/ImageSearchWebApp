#!/bin/bash 

#echo "打包文件"
#yarn build
echo "传输jclt文件"
#scp -P 1107 -r ./** root@172.31.195.110:/usr/share/nginx/html/saber/
scp -r ./dist/** /usr/share/nginx/html/jclt/
echo "jclt集采旅投部署成功"