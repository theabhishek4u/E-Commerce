#!/bin/bash
cd /home/z/my-project
while true; do
  if ! ss -tlnp | grep -q ":3000 "; then
    echo "$(date): Starting server..." >> /tmp/zylora-watchdog.log
    setsid bun run dev >> /tmp/zylora-dev.log 2>&1 &
    sleep 8
  fi
  sleep 3
done
