import modulesSchema from "./schema.js";
import mongoose from "mongoose";

const modulesModel= mongoose.model("Modules", modulesSchema);
export default modulesModel;