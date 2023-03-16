#!/bin/sh

yarn watcher:signature-request & pids=$!
yarn watcher:collected-signatures & pids+=" $!"
yarn watcher:affirmation-request & pids+=" $!"
yarn sender:home & pids+=" $!"
yarn sender:foreign & pids+=" $!"

trap "kill $pids" SIGTERM SIGINT
wait $pids

echo "Oracle StartBridge DONE"
