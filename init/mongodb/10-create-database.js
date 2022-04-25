conn = new Mongo();
db = conn.getDB('test');

// create the source database
db = db.getSiblingDB('inventory');
db.createUser({
    user: "inventory",
    pwd: "inventory",
    roles: [
        {role: "readWrite", db: "inventory"}
    ]
});

// create the destination database
db = db.getSiblingDB('replicator');
db.createUser({
    user: "replicator",
    pwd: "replicator",
    roles: [
        {role: "readWrite", db: "replicator"}
    ]
});