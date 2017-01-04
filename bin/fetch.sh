#!/usr/bin/env bash

cdir=`pwd`

# 安装依赖包 && 最新kero-adapter包
modulePre="$cdir/node_modules/"
# moduleName=(
#   "kero-adapter"
#   "tinper-neoui-polyfill"
#   "tinper-neoui"
#   )
#
# if [ -d "$modulePre" ]
# then
#   for name in ${moduleName[@]}
#   do
#     modulePath="${modulePre}${name}"
#     if [ -d $modulePath ]
#     then
#       echo "卸载旧版$name"
#       npm uninstall $name
#       echo "安装新版$name"
#       npm install $name@latest
#       echo "已安装成功新版$name"
#     else
#       echo "安装新版$name"
#       npm install $name
#       echo "已安装成功新版$name"
#     fi
#   done
# else
#     npm install
# fi


if [ -d "$modulePre" ]
then
  echo "卸载neoui-polyfill,neoui,kero-adapter"
  npm uninstall tinper-neoui-polyfill tinper-neoui kero-adapter
  echo "安装neoui-polyfill,neoui,kero-adapter"
  npm install tinper-neoui-polyfill tinper-neoui kero-adapter
  echo "已安装成功新版kero-adapter"
else
    npm install
fi
