import User from "../Models/userModel.js";

export const createUserController = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (!username) {
      return res.send({ message: "username is required" });
    }
    if (!email) {
      return res.send({ message: "email is required" });
    }
    if (!password) {
      return res.send({ message: "password is required  " });
    }
    const existEmail = await User.findOne({ email: email });
    if (existEmail) {
      return res.send({
        success: false,
        message: "email already exist",
      });
    }
    const existUsername = await User.findOne({ username: username });
    if (existUsername) {
      return res.send({
        success: false,
        message: "username is taken chose another",
      });
    }
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(200).send({
      success: true,
      message: "user created successfully",
    });
  } catch (error) {
    console.log(error).send({
      success: false,
      message: "error in signup",
    });
  }
};
