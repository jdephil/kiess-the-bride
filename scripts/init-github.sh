#!/bin/bash

#
# Creating kiess_the_bride git repo
#
git init
git add .
git commit -m "Initial commit"
# git remote add origin git@github.com:thinknimble/kiess_the_bride.git
gh repo create thinknimble/kiess_the_bride --private -y
git push origin main
printf "\033[0;32mRepo https://github.com/thinknimble/kiess_the_bride/\033[0m \n"
