#!/bin/bash

printf "\033[0;32mServer is running on port $CURRENT_PORT \033[0mhttp://$CURRENT_DOMAIN:$CURRENT_PORT \n"
gunicorn -b $CURRENT_DOMAIN:$CURRENT_PORT --chdir=server kiess_the_bride.wsgi --log-file -
