import express from 'express';
import http from "http";
import mongoose from "mongoose";
import { graphqlHTTP } from "express-graphql";
import shema from './graphql/shema';

const MONGO_URI = 'mongodb+srv://abdouhdahir:quF3jAYwqLdRB8jG@location-voiture.5exme.mongodb.net/?retryWrites=true&w=majority&appName=location-voiture';

const app = express();
const server = http.createServer(app);

mongoose.connect(MONGO_URI)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(() => {
  console.log("Error connecting to MongoDB");
});
 
app.use('/graphql', graphqlHTTP({
  schema: shema,
  graphiql: true,
}));

server.listen(4000, () => {
  console.log(`Server listening on port 4000`);
  console.log(`http://localhost:4000`);
})