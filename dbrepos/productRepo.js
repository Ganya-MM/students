const db = require('../config/mongodb');


exports.add = (product,callback) => {
        const collection = db.getCollection();
        collection.insertOne({ name: product.name, contact: product.contact, subjects: product.subjects, classs: product.classs, society: product.society, year: product.year})
            .then(() => {
                console.log("Document inserted");
                callback("ok")
            })
    }

