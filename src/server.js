
import { GoogleGenAI } from "@google/genai";
import ENV from "./config/ENV.js";
import { userMessage } from "./config/user.js";

const client = new GoogleGenAI({
    apiKey : ENV.GEMINI_SECRET_KEY
})


// const output = await client.interactions.create({
//   model: 'gemini-3.1-flash-lite',
//   input : userMessage
// })



