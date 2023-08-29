import { connectDB } from "@utils/database";
import Prompt from "@models/Prompt";
import User from "@models/User";

export const GET = async (req) => {
   try {
      await connectDB();
      const prompts = await Prompt.find({}).populate("creator");

      return new Response(JSON.stringify(prompts), { status: 200 });
   } catch (error) {
      return new Response("there is problem with upload all ", { status: 500 });
   }
};
