// Request → Middleware → Route Handler → Response

// Login
//   ↓
// Generate JWT
//   ↓
// Send Token to Client
//   ↓
// Client stores token
//   ↓
// Client sends token in Authorization header
//   ↓
// protect middleware verifies token
//   ↓
// req.user = decoded payload
//   ↓
// next()
//   ↓
// Protected Route Executes

import jwt from 'jsonwebtoken'

const protect=async (req,res,next) => {
    const token=req.headers.authorization;
    if(!token){
        return res.status(401).json({message:"Unauthorized"});
    }
    try {
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        req.userId=decoded.userId;
        next();
    } catch (error) {
        return res.status(401).json({message:"Unauthorized"});
    }
}


export default protect