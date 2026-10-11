import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
  quiet : true
});


const ENV = {
  GEMINI_SECRET_KEY: process.env.GEMINI_SECRET_KEY,
};

export default ENV;
