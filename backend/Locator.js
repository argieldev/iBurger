const express = require("express");
const router = express.Router();

router.use(express.json());

const branches = [
  {
    cid: 123,
    location: "Lipa" 
  }
]

router.post("/locate", (req, res) => {
  // locator logic
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({
      success: false,
      code: "Cannot identify location",
    });
  }

  const branch = branches.find((branch) => {
    return branch.cid === code;
  });

  if(!branch) {
    return res.status(400).json({
      success: false,
      branch: "Branch does not exist"
    });
  }
});