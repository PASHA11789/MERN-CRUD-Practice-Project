import User from "../model/userModel.js";

export const create = async (req, res) => {
  try {
    console.log("INCOMING BODY:", req.body);
    console.log("HEADERS:", req.headers);
    const newUser = new User(req.body);
    const { email } = newUser;
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists." });
    }
    const savedData = await newUser.save();
    res.status(200).json({message:"User Created succesfully"});
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const userData = await User.find();
    if (!userData || userData.length === 0) {
      return res.status(404).json({ message: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getUserByID = async (req, res) => {
  try {
    const ID = req.params.id;

    const userExist = await User.findById(ID);
    if (!userExist) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json(userExist);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const ID = req.params.id;

    const userExist = await User.findById(ID);
    if (!userExist) {
      return res.status(404).json({ message: "User not found." });
    }
    const updatedData = await User.findByIdAndUpdate(ID, req.body, {
      new: true,
    });
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const ID = req.params.id;

    const userExist = await User.findById(ID);
    if (!userExist) {
      return res.status(404).json({ message: "User not found." });
    }
    await User.findByIdAndDelete(ID);
    res.status(200).json({message:"User deleted"})
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
