#!/bin/sh
ansible-playbook ./setup-server.yml -i ./hosts/production -u root --extra-vars "env=production" "$@"
