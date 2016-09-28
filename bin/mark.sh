#!/bin/sh

cdir=`pwd`

prodName=(
    "components"
    "design-language"
    "getting-started"
    "global-style"
    "plugins"
)
docs="docs"

# 创建src/pages目录
htmlDir="$cdir/src/docs"
if [ ! -d $htmlDir ]
  then
  mkdir $htmlDir

fi
for name in ${prodName[@]}
do
  # 创建src子目录
  if [ ! -d "$htmlDir/$name" ]
    then
    mkdir "$htmlDir/$name"
  fi

  # md文档转html
  cd $docs/$name
  for fullName in `ls $1`
  do
    suffix="${fullName##*.}"
    if [ "${suffix}"=="md" ]
    then
      # 获取文件名，执行输出
      # echo "$fullName"
      prename="${fullName%.*}"
      marked "$fullName" -o "$htmlDir/$name/$prename.html"
      if [ "$prename" = "SUMMARY" ]
        then
        # 替换md链接为html
        sed -ig "s/\w*.md/$1.html/" $htmlDir/$name/$prename.html
        rm $htmlDir/$name/$prename.htmlg
      fi
    fi   
  done
done

# 替换SUMMARY.md链接
# sed -i "s/查找字段/替换字段/g" `grep 查找字段 -rl 路径`