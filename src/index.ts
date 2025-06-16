import express from "express";
import taskRouter from "./routes/task.route"
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5500;
app.get('/',(_req,res)=>{
res.send(`<h1 style="color:blue;text-align-center;">Express Typescript Task API </h1>`)
});
app.use('/tasks',taskRouter);
app.listen(PORT,()=>console.log(`Server running at PORT:${PORT}`));