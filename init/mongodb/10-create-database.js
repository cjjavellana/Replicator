conn = new Mongo();
db = conn.getDB('test');

// create the source database
inventoryDB = db.getSiblingDB('inventory');
inventoryDB.createUser({
    user: "inventory",
    pwd: "inventory",
    roles: [
        {role: "readWrite", db: "inventory"}
    ]
});

inventoryDB.products.insertMany([
    { title: "Alaska", summary: "Sweetened Milk", type: "Condensed Milk", createdBy: "SYSTEM", createdDate: new Date() }
]);

// create the destination database
db = db.getSiblingDB('replicator');
db.createUser({
    user: "replicator",
    pwd: "replicator",
    roles: [
        {role: "readWrite", db: "replicator"}
    ]
});