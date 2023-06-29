import { model, models, Schema } from "mongoose";

const PromptSchema = new Schema({
   creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
   },
   title: {
      type: String,
      required: [true, "Please add a title"],
      unique: [true, "Title must be unique"],
   },
   prompt: {
      type: String,
      required: [true, "Please add a prompt"],
   },
   tags: {
      type: [String],
   },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
