import { MongoClient } from "mongodb";


const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);


// const dbName = 'todo';
// const createTask =  async (providedName) => {
//     await client.connect()
// const db = client.db(dbName);

// const collection = db.collection('tasks');


// // done is true, if not false
// const result = await collection.insertOne({name: providedName, done: false})


// console.log(result)
// return result ;


// }
// createTask('Mais');












// // insertMany Tasks


// const dbName = 'todo';
// const createMultiTask =  async (providedName) => {
//     await client.connect()
// const db = client.db(dbName);

// const collection = db.collection('tasks');
// const insertResult = await collection.insertMany([{name: providedName, done: false}])

// console.log('Inserted documents =>', insertResult);

// }

// createMultiTask ([ { name: "Rice" } , { name: "Cereal"}, { name: "Milk"}, { name: "Bread"}, { name: "Aplle"}, { name: "Pineaplle"}, { name :"Green Onion"}, { name : "Eggs"}, { name: "Orange Juice"}]);













// // Find all Documents
//     const dbName = 'todo';
//     const getAllTask = async (providedName) => {
//          await client.connect()
//     const db = client.db(dbName);
//     const collection = db.collection('tasks');
    
//     const findResult = await collection.find({}).toArray();

//     console.log('Found documents =>', findResult)
    
    
//      }

//     getAllTask ();
     











    //  Delete document


const dbName = 'todo';
    const deleteTask = async (providedId) => 
{
    await client.connect()
    const db = client.db(dbName);
    const collection = db.collection ('tasks');
    const deleteTask = await collection.deleteMany({_id : providedId})
    console.log('Deleted documents =>', deleteTask);
}


deleteTask({ _id:"621275ad02bdeedadc8e4d39" }, {_id:"621275f53d3b3d7cd47bf34d"}, {_id:"62127649130f11b3fd7e1f92"} );
