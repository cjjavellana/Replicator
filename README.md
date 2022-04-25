# Replicator

A demonstrator for aggregating datasets from various sources using Debezium

## Architecture

TODO

## Starting MariaDB

TODO

## MongoDB

### Starting up MongoDB

Starts mongodb & mongo-express

```shell
$ docker-compose up -d mongo-express
```

### Cleaning up MongoDB

Stop all mongo containers & clear mounted data directory

```shell
$ docker-compose stop mongo-express mongo mongo-setup
$ ./reset-mongodb.sh
```
