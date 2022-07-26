
import { client } from "./index.js";
import { ObjectId } from "mongodb";


export async function getUserByName(UserName) {
    //db.users.findOne({username: username });
  return await client.db("guvi-node-app").collection("stack-users").findOne({ UserName: UserName });
}

export async function createUser(data) {
    //db.users.insertOne(data);
  return await client.db("guvi-node-app").collection("stack-users").insertOne(data);
}

// export async function getQuestionByTitle(questionTitle) {
//   //db.users.findOne({username: username });
// return await client.db("guvi-node-app").collection("stack-questions").findOne({ questionTitle: questionTitle });
// }
// export async function createQuestionlist(data) {
//   //db.users.insertOne(data);
// return await client.db("guvi-node-app").collection("stack-questions").insertMany(data);
// }
// export async function createQuestion(data) {
//   //db.users.insertOne(data);
// return await client.db("guvi-node-app").collection("stack-questions").insertOne(data);
// }
// export async function createUserlist(data) {
//   //db.users.insertOne(data);
// return await client.db("guvi-node-app").collection("stack-all-users").insertMany(data);
// }
// export async function getUserlist(data) {
//   //db.users.insertOne(data);
// return await client.db("guvi-node-app").collection("stack-all-users").find({}).toArray();
// }

// export async function getAllQuestions() {
//   //db.users.findOne({username: username });
// return await client.db("guvi-node-app").collection("stack-questions").find({}).toArray();
// }