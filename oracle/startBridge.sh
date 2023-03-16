#!/bin/sh

if [[ $* == *--no-deploy* ]]
then
  echo "No deploy..."
else
  pwd=`pwd`

  cd ../contracts/deploy
  yarn deploy

  cd $pwd
fi

brew services restart rabbitmq & pids=$!
redis-server & pids+=" $!"

echo "Sleeping 20s ..."

sleep 20

echo "done - starting process"

yarn watcher:signature-request & pids+=" $!"
yarn watcher:collected-signatures & pids+=" $!"
yarn watcher:affirmation-request & pids+=" $!"
yarn sender:home & pids+=" $!"
yarn sender:foreign & pids+=" $!"

trap "kill $pids" SIGTERM SIGINT
wait $pids

echo "Oracle StartBridge DONE"
