if [[ $1 =~ ^([a-z]+)/[a-z]+(-[a-z]+)+$ ]];then
  if [[ ${BASH_REMATCH[1]} =~ ^(feature|fix)$ ]]; then
    echo "success"
    exit 0
  else
    echo "error"
    exit 1
  fi
else
	echo "erroe"
  exit 1
fi
