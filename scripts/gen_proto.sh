#!/bin/bash

function check_installed() {
  if ! command -v $1 &> /dev/null
  then
    echo "$1 could not be found"
    exit
  fi
}

check_installed protoc

if [ -z "$1" ]
then
  echo "Usage: gen_proto.sh <path-to-perun-wallet-spec>"
  exit
fi

# Directory where perun-wallet-spec is located:
PROTO_DIR=$1

CD=$(pwd)

cd $PROTO_DIR/src

protoc --plugin=$CD/node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_out=$CD/src \
  --ts_proto_opt=outputServices=nice-grpc,outputServices=generic-definitions,useExactTypes=false \
  ./perun-wallet.proto
