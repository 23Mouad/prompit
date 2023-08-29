import { connectDB } from "@utils/database";
import Prompt from "@models/Prompt";
import User from "@models/User";

//GET
export const GET = async (req, { params }) => {
   try {
      await connectDB();
      const prompt = await Prompt.findById(params.id).populate("creator");

      if (!prompt) return new Response("prompt not found", { status: 404 });

      return new Response(JSON.stringify(prompt), { status: 200 });
   } catch (error) {
      return new Response("there is problem with this fct ", { status: 500 });
   }
};

//Patch

export const PATCH = async (req, { params }) => {
   try {
      await connectDB();
      const { title, prompt } = await req.json();

      const Existingprompt = await Prompt.findById(params.id);

      if (!Existingprompt)
         return new Response("prompt not found", { status: 404 });

      Existingprompt.title = title;
      Existingprompt.prompt = prompt;

      Existingprompt.save();
      return new Response(JSON.stringify(Existingprompt), { status: 200 });
   } catch (error) {
      return new Response("there is problem with this fct ", { status: 500 });
   }
};

//DELETE

export const DELETE = async (req, { params }) => {
   try {
      await connectDB();
      await Prompt.findByIdAndDelete(params.id);
      return new Response("prompt deleted", { status: 200 });
   } catch (error) {
      return new Response("there is problem with this fct ", { status: 500 });
   }
};
