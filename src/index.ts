import express from "express";
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5500;
app.get('/',(req,res)=>{
res.send(`<h1 style="color:blue;text-align-center;">Express Typescript Task API </h1>`)
})

app.listen(PORT,()=>console.log(`Server ruinning at PORT:${PORT}`));