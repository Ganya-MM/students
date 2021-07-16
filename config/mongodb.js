const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://ganyamm:ganyamm@cluster0.orw9j.mongodb.net/student?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true });

var collection;


module.exports = {
    connect:function(callback) {
        MongoClient.connect(uri)
            .then(function(client){
                console.log("connect to Mongo : productDB");
                collection = client.db('student-schema').collection('student')
                return callback("ok")
            })
            .catch(function(err){
                console.log(err);
            })
    },

    getCollection:function() {
        return collection;
    }
}
