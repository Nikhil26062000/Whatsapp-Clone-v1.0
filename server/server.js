import express from 'express';
const PORT = process.env.PORT || 8000

const app = express();

app.listen(PORT,()=>{
    console.log("server is listening on port",PORT);
})