import { connectDB } from "@utils/database";
import Prompt from "@models/Prompt";

export const POST = async (req) => {
   const { title, prompt, tags, id } = await req.json();

   try {
      await connectDB();
      const newPrompt = await new Prompt({
         creator: id,
         title,
         prompt,
         tags,
      });

      await newPrompt.save();

      return new Response(JSON.stringify(newPrompt), { status: 200 });
   } catch (error) {
      console.log(error);
      return new Response(JSON.stringify(error), { status: 500 });
   }
};
