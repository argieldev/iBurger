const express = require("express");
const router = express.Router();

const users = [
  {
    id: 1,
    email: "owner@gmail.com",
    password: "12345678",
    role: "owner",
  },
];

router.post("/login", (req, res) => {
  // login logic
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      email: "Gmail cannot be empty"
    });
  }

  if (!password) {
    return res.status(400).json({
      success: false,
      password: "Password cannot be empty"
    });
  }

  const user = users.find((user) => {
    return user.email === email;
  });

  if (!user) {
    return res.status(400).json({
      success: false,
      email: "User not found"
    });
  }

  if (password === user.password) {
    return res.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        role: user.role
      }
    });
  } else {
    return res.status(400).json({
      success: false,
      password: "Wrong credentials"
    });
  }
});

module.exports = router;