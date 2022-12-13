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

  const getUserById = () => async (req, res) => {
    try {
      const { id } = req.params;
      const user = await Users.findById(id);
  
      return res.status(200).json(user);
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

 const singUp = () => async (req, res) => {
    const { email, password, confirmPassword,fullName, userName } = req.body;
  
    try {
      const exsist = await Users.findOne({ email });
      if (exsist) return res.json("user alrady exsist");
  
      if (password !== confirmPassword)
        return res.status(404).json({ message: "Password don't match" });
      const userResults = await Users.create({
        email: email,
        name: fullName,
        password: password,
        username: userName,
      });
  
      return res.status(200).json(userResults);
    } catch (e) {
      return res.status(400).json(e);
    }
  }

  const singIn = () => async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const exsist = await Users.findOne({ email });
      
      if (!exsist) return res.json("user not exsist");
  
      const currect = password === exsist.password
     
      if(!currect)return res.json("password not currect");

      return res.status(200).json(exsist);
    } catch (e) {
      return res.status(400).json(e);
    }
  }

  module.exports = {getAllUsers , deleteUser ,updateUser ,singUp ,singIn,getUserById}