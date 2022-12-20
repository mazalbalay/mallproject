const Users = require("../MODELS/userModel");
const bcryptjs = require("bcryptjs");
const sgMail = require("@sendgrid/mail");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const {OAuth2Client} = require('google-auth-library');

const client =  new OAuth2Client('727555427268-u0l3487tpitph7t1s2lir4vsdk6153se.apps.googleusercontent.com')

const updateUser = () => async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.body;
    const updatedUser = await Users.findByIdAndUpdate(id, user);

    return res.status(200).json(updatedUser);
  } catch (e) {
    return res.status(400).json(e);
  }
};

const getUserById = () => async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findById(id);

    return res.status(200).json(user);
  } catch (e) {
    return res.status(400).json(e);
  }
};

const deleteUser = () => async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await Users.findByIdAndRemove(id);

    return res.status(200).json(deletedUser);
  } catch (e) {
    return res.status(400).json(e);
  }
};

const getAllUsers = () => async (req, res) => {
  try {
    const users = await Users.find();

    return res.status(200).json(users);
  } catch (e) {
    return res.status(400).json(e);
  }
};

const singUp = () => async (req, res) => {
  const { email, password, confirmPassword, fullName, userName } = req.body;

  try {
    const exsist = await Users.findOne({ email });

    if (exsist) return res.status(404).json("user alrady exsist");

    if (password !== confirmPassword)
      return res.status(404).json("Password don't match");

    // const hashedPassword = await bcryptjs.hash(password, 12);

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
};

// const singUp = () => async (req, res) => {
//   const { email, password, confirmPassword, fullName, userName } = req.body;

//   const exsist = await Users.findOne({ email });

//   if (exsist) return res.status(404).json("user alrady exsist");

//   if (password !== confirmPassword)
//     return res.status(404).json("Password don't match");

//   // const hashedPassword = await bcryptjs.hash(password, 12);
// };

// sgMail.setApiKey(
//   "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"
// );

// sgMail
//   .send({
//     to: "oshbalay@gmail.com", // Change to your recipient
//     from: "oshbalay@gmail.com", // Change to your verified sender
//     subject: "Sending with SendGrid is Fun",
//     text: "and easy to do anywhere, even with Node.js",
//     html: "<strong>and easy to do anywhere, even with Node.js</strong>",
//   })
//   .then(() => {
//     console.log("Email sent");
//   })
//   .catch((error) => {
//     console.error(error);
//   });

const singIn = () => async (req, res) => {
  const { email, password } = req.body;

  try {
    const exsist = await Users.findOne({ email });

    if (!exsist) return res.status(404).json("user not exsist");

    const currect = password === exsist.password;
    // bcryptjs.compare(  password ,exsist.password)
    if (!currect) return res.status(404).json("password not currect");

    return res.status(200).json(exsist);
  } catch (e) {
    return res.status(400).json(e);
  }
};

const facebooklogin = () => async (req, res) => {
  const { userID, accessToken } = req.body;
  let urkGraphFacebook = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`;
  const { data } = await axios.get(urkGraphFacebook);

  const { email, name } = data;
  const newUser = { name, email, password: email };
  const user = await Users.findOne({ email });

  if (user !== null) {
    const token = jwt.sign({ _id: user._id }, "test", {
      expiresIn: "1d",
    });

    return res.json({ token, user: user });
  } else {
    console.log(newUser);
    const newUserd = await Users.create(newUser);
    const token = jwt.sign({ _id: newUser._id }, "test", {
      expiresIn: "1d",
    });

    return res.json({ token, user: newUserd });
  }
};

const googlelogin = () => async (req, res) => {
  const { tokenId } = req.body;

    // const data = await client.verifyIdToken({ idToken: tokenId , audience:'727555427268-u0l3487tpitph7t1s2lir4vsdk6153se.apps.googleusercontent.com' })
    // console.log(data);
   


};

module.exports = {
  getAllUsers,
  deleteUser,
  updateUser,
  singUp,
  singIn,
  getUserById,
  facebooklogin,
  googlelogin
};
