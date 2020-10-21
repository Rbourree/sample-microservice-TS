#!/bin/bash
export $(cat .env | xargs)
docker build -t api -f scripts/dockerfile.local .