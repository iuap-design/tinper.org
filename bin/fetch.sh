#!/bin/sh

cdir=`pwd`

# 安装依赖包 && 最新kero-adapter包
modulePre="$cdir/node_modules/"
moduleName=(
  "kero-adapter"
  "tinper-neoui-polyfill"
  "tinper-neoui"
  )

if [ -d "$modulePre" ]
then
  for name in ${moduleName[@]}
  do
    modulePath="${modulePre}${name}"
    if [ -d $modulePath ]
    then
      echo "卸载旧版$name"
      npm uninstall $name
      echo "安装新版$name"
      npm install $name@latest --save
      echo "已安装成功新版$name"
    else
      echo "安装新版$name"
      npm install $name
      echo "已安装成功新版$name"
    fi
  done
else
    npm install
fi
