import { DB_PASSWORD, DB_HOST, DB_NAME } from "./constants";
import mongoose from "mongoose";

export const connectToDatabase = async () =>
  mongoose.connect(
    `mongodb+srv://dbUser:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
