import mongoose from "mongoose";

export const connectDB = async () => {
   try {
      const conn = await mongoose.connect(process.env.MONGODB_URI, {
         useUnifiedTopology: true,
         useNewUrlParser: true,
      });
      console.log(`MongoDB Connected: `);
   } catch (error) {
      console.log(`Error: ${error.message}`);
      process.exit(1);
   }
};
