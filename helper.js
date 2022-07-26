
import { client } from "./index.js";
import { ObjectId } from "mongodb";


export async function getUserByName(UserName) {
    //db.users.findOne({username: username });
  return await client.db("guvi-node-app").collection("password-reset-flow-users").findOne({ UserName: UserName });
}

export async function createUser(data) {
    //db.users.insertOne(data);
  return await client.db("guvi-node-app").collection("password-reset-flow-users").insertOne(data);
}

export async function getUserByEmail(Email) {
    //db.users.findOne({username: username });
  return await client.db("guvi-node-app").collection("password-reset-flow-users").findOne({ Email: Email });
}
