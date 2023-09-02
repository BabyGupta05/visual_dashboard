// const fs = require('fs');
// const mongoose = require('mongoose');
// const jsonData = JSON.parse(fs.readFileSync('jsondata.json'));
// require('dotenv').config()

// mongoose.connect(process.env.DATABASE_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,

// });
// const dataSchema = new mongoose.Schema({
//     end_year: String,
//     intensity: Number,
//     sector: String,
//     topic: String,
//     insight: String,
//     url: String,
//     region: String,
//     start_year: String,
//     impact: String,
//     added: Date,
//     published: Date,
//     country: String,
//     relevance: Number,
//     pestle: String,
//     source: String,
//     title: String,
//     likelihood: Number,
//   });
// const Data = mongoose.model('Data', dataSchema);

// async function insertData() {
//   try {
//     await Data.insertMany(jsonData);
//     console.log('Data inserted successfully.');
//   } catch (err) {
//     console.error('Error inserting data:', err);
//   } finally {
//     mongoose.connection.close();
//   }
// }

// insertData();
