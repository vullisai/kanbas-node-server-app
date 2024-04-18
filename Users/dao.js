import userModel from "./model.js";

export const createUser = (user) => {
    delete user._id;
    userModel.create(user);}
export const findAllUsers = () => userModel.find();
export const findUserById = (userId) => userModel.findById(userId);
export const findUserByUsername = (username) =>  userModel.findOne({ username: username });
export const findUserByCredentials = (username, password) =>  userModel.findOne({ username, password });
export const updateUser = (userId, user) =>  userModel.updateOne({ _id: userId }, { $set: user });
export const deleteUser = (userId) => userModel.deleteOne({ _id: userId });
export const findUsersByRole = (role) => userModel.find({ role: role });

