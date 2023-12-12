const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/MyDatbase');
  console.log('db connected')
}
const userSchema = new mongoose.Schema({
    inputName: String,
    inputPhoneNumber: String,
    inputEmail : String,
    inputNewPassword : String
});

const User = mongoose.model('User', userSchema);

const server = express();
server.use(cors());
server.use(bodyParser.json());

server.post('/MyDatbase',async (req,res)=>{
     
    let user = new User();
    user.inputName = req.body.inputName;
    user.inputPhoneNumber = req.body.inputPhoneNumber;
    user.inputEmail = req.body.inputEmail;
    user.inputNewPassword = req.body.inputNewPassword;

    const doc = await user.save();

    console.log(doc);
    res.json(doc);
})

server.listen(8000,()=>{
    console.log('server started')
})