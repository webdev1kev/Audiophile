const data = require("./data.json");
const faunadb = require("faunadb");

const q = faunadb.query;

console.log(process.env.FAUNA_DB_SECRET);

const client = new faunadb.Client({
  secret: process.env.FAUNA_DB_SECRET,
});

data.forEach(async (product) => {
  await client.query(q.Create(q.Collection("products"), { data: product }));
});
