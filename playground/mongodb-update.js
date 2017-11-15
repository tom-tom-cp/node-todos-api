const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB Server');
    }

    console.log('Connected to MongoDB Server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a0beaedf00e3425ac018fc1')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result => {
    //     console.log(result);
    // }));

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a0c9efab927b55d6129fbdd')
    }, {
        $set: {name: 'Jaime'},
        $inc: {age: 1}
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});
