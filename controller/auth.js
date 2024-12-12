const User = require('../models/auth');
const bcrypt = require('bcryptjs');

const authController = {
  createUser: async (req, res) => {
    const { email, password } = req.body;

    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res
          .status(400)
          .json({ message: 'User with this email already exists' });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ email, password: hashedPassword });
      await newUser.save();
      res
        .status(201)
        .json({ message: 'User created successfully', user: newUser });
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Error creating user', error: error.message });
    }
  },

  loginUser: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }
      res.status(200).json({ message: 'Login successfully', user });
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Error logging in', error: error.message });
    }
  },
};

module.exports = authController;
