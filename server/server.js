import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import resumeRouter from "./routes/resumeRoutes.js";
import aiRouter from "./routes/aiRoutes.js";

// Summary

// Method Purpose
// GET Fetch data
// POST Create data
// PUT Update entire data
// PATCH Update partial data
// DELETE Remove data
// USE Middleware
// ALL Handle all request types

// express() creates an Express application.
// The app object is used to define routes, middleware, and server settings.
const app=express();
const PORT=process.env.PORT || 3000;

//Database connection
await connectDB(); 

// This middleware allows Express to read JSON data sent from the client.
app.use(express.json())
app.use(cors())




app.get('/',(req,res)=>res.send("Server is live..."))


app.use('/api/users',userRouter)

app.use('/api/resumes',resumeRouter)

app.use('/api/ai',aiRouter)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});