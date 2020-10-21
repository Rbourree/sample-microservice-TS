#!/bin/bash

export $(cat .env | xargs)
docker run \
    --rm \
    -it --env-file .env \
    --name API \
    -v $PWD:/usr/src/app \
    -p $PORT:3000 \
    api
