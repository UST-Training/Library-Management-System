const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//const uri = process.env.ATLAS_URI;
//mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
mongoose.connect("mongodb://localhost:27017/lms", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const connection= mongoose.connection;
connection.once('open', () => {
    console.log("Mongodb database connection established successfully !!");
})

const bookRouter = require('./routes/book');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
app.use('/book', bookRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});