const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
app.use( express.json() );
app.use( cors() );


app.post("/save", (req, res) => {
	const url = "mongodb+srv://snehaphadtare31:gGotBguOJmkGrHyq@cluster0.0f3w1sh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
	const client = new MongoClient(url);
	const db = client.db("ss31march24");
	const coll = db.collection("student");
	const doc = {"name":req.body.name, "company":req.body.company, "pkg":req.body.pkg};
	
	coll.insertOne(doc)
	.then(result => res.send(result))
	.catch(error => res.send(error));
});
app.listen(9000, () => { console.log("ready @ 9000")} );
