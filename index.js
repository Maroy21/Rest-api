import express from 'express'
import mongoose from 'mongoose'

import router from './router.js'
mongoose.set('useFindAndModify', false);
const PORT = 3030;
const DB_URL = 'mongodb+srv://APIboy:******@cluster0.wyi7d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const app = express();
app.use(express.json()) 

app.use("/api", router);

async function startApp () {
    try {
    await mongoose.connect(DB_URL, {useUnifiedTopology:true, useNewUrlParser: true});
    app.listen(PORT, () => console.log('Server started')); 
    } catch(e) {
        console.log(e);
    }
};
startApp();