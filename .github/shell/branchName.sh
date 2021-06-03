source ./config.sh

if [[ $1 =~ ^($branchType)/[a-z]+(-[a-z]+)*$ ]];then
  echo "success"
  exit 0
else
	echo "erroe"
  exit 1
fi
