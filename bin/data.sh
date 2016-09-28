#!/bin/sh

echo `pwd`

basePath="base/public/base.html"
# $(cat base.html)不能换行,取消此方法
# baseStr=$(cat base.html)

# 换行
baseStr=""
while IFS='' read -r line || [[ -n "$line" ]]; do
	baseStr="$baseStr\n$line"
done < "$basePath"
# echo $baseStr

src="src/docs"
if [ -d $src ] 
	then
	cd $src

	for dir in `ls $1`
	do
		if [ $dir != "public" ]
			then

			cd $dir

			if [ -f "SUMMARY.html" ]
				then
				sumfile=$(cat SUMMARY.html)
				baseStr=${baseStr/<%Summary%>/${sumfile}}
			fi

			for file in `ls $1`
			do
				if [ $file != "SUMMARY.html" ]
				then
					fileStr=""
					while IFS='' read -r line || [[ -n "$line" ]]; do
						fileStr="$fileStr\n$line"
					done < "$file"
					middleStr=$baseStr
					# 清空文件
					> $file
					# 替换字符串
					replaceStr=${middleStr/<%Replace%>/${fileStr}}
					`echo $replaceStr >> $file`
				fi
			done
			cd ..
		fi
	done

	cd ..
fi

# 内容替换
# sed -i -e "s/<%Replace%>/${num}/g" $basePath
