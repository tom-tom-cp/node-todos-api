const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB Server');
    }

    console.log('Connected to MongoDB Server');

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    //     // console.log(JSON.stringify(, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err);
    // });
    db.collection('Users').find({
        name: 'Tomás'
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to find users');
    });

    // db.close();
});
