const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main()
.then(() => {
    console.log("Connection is Successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from:"Neha",
        to:"Preeti",
        msg:"Send me notes for the exam.",
        created_at: new Date(),
    },
    {
        from:"Rohit",
        to:"Mohit",
        msg:"What is JS callback?",
        created_at: new Date(),
    },
    {
        from:"Anil",
        to:"Sumit",
        msg:"All the best for the exam.",
        created_at: new Date(),
    },
    {
        from:"Anita",
        to:"Ramesh",
        msg:"Bring me some fruits.",
        created_at: new Date(),
    },
    {
        from:"Neha",
        to:"Priya",
        msg:"When are we going for our next trip.",
        created_at: new Date(),
    },
    
];


Chat.insertMany(allChats);

