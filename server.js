const express = require('express');
// const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB Atlas
// const connectionString = 'YOUR_MONGODB_ATLAS_CONNECTION_STRING';
// mongoose.connect(connectionString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'Connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB Atlas');
// });

app.get("/",(req,res)=>
{
    res.send("home here")
})
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
