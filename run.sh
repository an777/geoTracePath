#!/usr/bin/env bash

traceroute -n yahoo.com | awk '(NR>1) {print $2}' | python ./getGeoFromIP.py