const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Registration
// exports.register = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     const existingUser = await User.findOne({ where: { email } });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = await User.create({
//       name,
//       email,
//       password: hashedPassword,
//     });

//     res.status(201).json({ user: newUser });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ where: { email } });
//     if (!user) return res.status(400).json({ message: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch)
//       return res.status(400).json({ message: "Invalid credentials" });

//     const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
//       expiresIn: "1h",
//     });
//     res.json({ token, user });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };


exports.register = async (req, res) => {
  try {
    const { name, email, password, mobileNo } = req.body;

    // Check if the email already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Check if the mobile number already exists
    const existingMobileNo = await User.findOne({ where: { mobileNo } });
    if (existingMobileNo) {
      return res.status(400).json({ message: "Mobile number already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      mobileNo,
    });

    res.status(201).json({ user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


exports.login = async (req, res) => {
  try {
    const { email, password, mobileNo } = req.body;

    // Determine if user is logging in with email or mobileNo
    let user;
    if (email) {
      user = await User.findOne({ where: { email } });
    } else if (mobileNo) {
      user = await User.findOne({ where: { mobileNo } });
    }

    if (!user) return res.status(400).json({ message: "User not found" });

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    // Generate a JWT token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
