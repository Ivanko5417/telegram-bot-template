#!/bin/sh
ansible-playbook ./deploy-app.yml -i ./hosts/production -u root --extra-vars "env=production" "$@"
