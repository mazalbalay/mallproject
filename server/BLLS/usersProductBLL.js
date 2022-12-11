const Users = require("../MODELS/userModel");
const bcrypt = require("bcryptjs");

const updateUser = () => async (req, res) => {
    try {
      const { id } = req.params;
      const user = req.body;
      const updatedUser = await Users.findByIdAndUpdate(id, user);
  
      return res.status(200).json(updatedUser);
    } catch (e) {
      return res.status(400).json(e);
    }
  }

  const deleteUser = () => async (req, res) => {
    try {
      const { id } = req.params;
      const deletedUser = await Users.findByIdAndRemove(id);
  
      return res.status(200).json(deletedUser);
    } catch (e) {
      return res.status(400).json(e);
    }
  }

  const getAllUsers = () => async (req, res) => {
    try {
  
      const users = await Users.find();
  
      return res.status(200).json(users);
    } catch (e) {
      return res.status(400).json(e);
    }
  }

 const register = () => async (req, res) => {
    const { email, password, confirmpass, name, username } = req.body;
  
    try {
      const exsist = await Users.findOne({ email });
      console.log(exsist);
      if (exsist) return res.json("user alrady exsist");
  
      if (password !== confirmpass)
        return res.status(404).json({ message: "Password don't match" });
      const userResults = await Users.create({
        email: email,
        name: name,
        password: password,
        username: username,
      });
  
      return res.status(200).json(userResults);
    } catch (e) {
      return res.status(400).json(e);
    }
  }

  module.exports = {getAllUsers , deleteUser ,updateUser ,register}