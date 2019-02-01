#!/usr/bin/env bash

from=$(ls | grep -v node_modules | grep -v scripts)
to="$HOME/workspace/neitui_weapp/bot"


echo -e "\033[31m testing \033[0m"

cp ./git-merge.sh ./bak

# if [[ ! -d $to ]]; then
#   echo -e "\033[33m Target dir: $to is not exist. \033[0m"
# else
#   cp -R $from $to
#   if [[ $? -eq 0 ]]; then
#     echo -e "\033[32m Copy successfully \033[0m"
#   else
#     echo -e "\033[31m Copy failed, check manually! \033[0m"
#   fi
# fi