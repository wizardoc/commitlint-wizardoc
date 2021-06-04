#!/bin/bash
branchType="feature|hotfix|improve|chore"

if [[ $1 =~ ^($branchType)/[a-z]+(-[a-z]+)*$ ]]
then
  exit 0
else
  exit 1
fi
