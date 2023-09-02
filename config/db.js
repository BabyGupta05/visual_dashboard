const mongoose=require("mongoose")
require('dotenv').config()
const connection= mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,

  useCreateIndex: true,
});

module.exports=connection;