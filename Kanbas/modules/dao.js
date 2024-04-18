import modulesModel from "./module.js";
import mongoose from "mongoose";

export const findAllModules=()=> modulesModel.find();
export const findModuleByCourseId=(courseId)=>{
    try{
       return modulesModel.find({course:courseId});
    }
    catch{
        console.log(Error);
    }
}
export const deleteModule=(id)=>modulesModel.deleteOne({_id: id});
export const updateModule = (id, module) => {
    return modulesModel.updateOne({ _id: id }, { $set: module });
}
export const createModule = (module) => {
    const ans = module.save();
    return ans;
}