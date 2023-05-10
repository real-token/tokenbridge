#!/bin/sh

yarn watcher:signature-request &
yarn watcher:collected-signatures &
yarn watcher:affirmation-request &
yarn sender:home &
yarn sender:foreign &

wait

echo "oracle: startbridge done"
