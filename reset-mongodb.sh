#!/bin/bash

rm -rf ./data/mongodb
mkdir ./data/mongodb
touch ./data/mongodb/.keep

docker rm "$(docker ps -aq --filter="status=exited")"
docker volume prune