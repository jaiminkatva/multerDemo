const express = require('express')
const router = express.Router()
const studentController = require("../controller/studentController")

router.post("/addStudent", studentController.upload, studentController.addStudent)

router.get("/getStudent", studentController.getStudent)

module.exports = router