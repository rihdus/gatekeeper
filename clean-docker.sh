#!/bin/bash

echo removing containers 
docker rm $(docker ps -a -f status=exited -q)
docker rmi gatekeeper_server -f