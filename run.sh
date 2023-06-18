#!/usr/bin/env bash

IN="target.in"
OUT="geoPoints.js"

echo 'var jsonIN = {' > $OUT

#traceroute -n yahoo.com | awk '(NR>1) {print $2}' | python ./getGeoFromIP.py


while read line; do
# reading each line

echo "\"$line\" :  [" >> $OUT
traceroute -n $line | awk '(NR>1) {print $2}' | python ./getGeoFromIP.py >> $OUT
echo "]," >>$OUT

done < $IN

echo "}" >> $OUT