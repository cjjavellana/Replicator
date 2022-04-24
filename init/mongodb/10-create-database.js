conn = new Mongo()
db = conn.getDB('test')
db = db.getSiblingDB('replicator')
db.createUser({
    user: "replicator",
    pwd: "replicator",
    roles: [
        {role: "readWrite", db: "replicator"}
    ]
})

var res = rs.initiate()
printjson(res)