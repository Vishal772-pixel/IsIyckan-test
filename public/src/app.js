import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// CORS configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

// Form wala data yaha se aayega
app.use(express.json({
    limit: "16kb"
}));

// URL-encoded data yaha se aayega
app.use(express.urlencoded({
    extended: true,
    limit: "16kb"
}));

// PDF, images wali chize yaha pe
app.use(express.static("public"));

// Server se user ka cookie access yaha se
app.use(cookieParser());

export default app;

