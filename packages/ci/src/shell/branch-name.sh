#!/bin/bash
branch_type="feature|hotfix|improve|chore"

if [[ $1 =~ ^($branch_type)/[a-z]+(-[a-z]+)*$ ]];then
  exit 0
else
  exit 1
fi
