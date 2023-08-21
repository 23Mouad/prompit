import { connectDB } from "@utils/database";
import Prompt from "@models/Prompt";

export const GET = async (req, { params }) => {
   try {
      connectDB();
      const prompts = await Prompt.find({ creator: params.id }).populate(
         "creator"
      );

      return new Response(JSON.stringify(prompts), { status: 200 });
   } catch (error) {
      return new Response("there is problem with upload all ", { status: 500 });
   }
};
