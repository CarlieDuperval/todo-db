import { MongoClient, ObjectId } from "mongodb";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbName = "todo";
const createTask = async (providedName) => {
  await client.connect();
  const db = client.db(dbName);

  const collection = db.collection("tasks");

  // done is true, if not false
  const result = await collection.insertOne({
    name: providedName,
    done: false,
  });

  console.log(result);
  return result;
};
// createTask('Mais');

// // insertMany Tasks
const createMultipleTask = async (taskList) => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("tasks");

  const result = await collection.insertMany(taskList);

  console.log(result);
};

//createMultipleTask ([
//      { name: "Banan", done: false } ,
//       { name: "Crakers", done: false}, 
//       { name: "Chocolate", done: false}, 
//       { name: "Papaya", done: false},
//        { name: "Pear", done: false}, 
//        { name: "Cherry", done: false},
//         { name :"Cheese", done: false}, 
//         { name : "Sugar", done: false}, 
//         { name: "Slat", done: false}
//     ])

// // Find all Documents

const getAllTask = async () => {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("tasks");

  const result = await collection.find({}).toArray();

  console.log(result);

  return result;
};

//getAllTask();

// Update

const updateTask = async (id) => {
  // connect to the server
  await client.connect();

  const db = client.db(dbName);
  const collection = db.collection("tasks");

  const objId = new ObjectId(id);
  const updateTask = await collection.updateOne(
    { _id: objId },
    { $set: { done: true } }
  );

  console.log(updateTask);
  return updateTask;
};
//updateTask("621275f53d3b3d7cd47bf34d")

//  Delete document
// declare fubction
const deleteTask = async (Id) => {
    // connection to server
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("tasks");

  const objId = new ObjectId(Id);
  const deleteTask = await collection.deleteOne({ _id: objId });

  console.log(deleteTask);

  return deleteTask;
}

//deleteTask("621275ad02bdeedadc8e4d39")
//deleteTask("621275f53d3b3d7cd47bf34d")
//deleteTask("62127649130f11b3fd7e1f92")
deleteTask("6214e93fea5558617bf02813")
