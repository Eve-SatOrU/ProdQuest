const express = require("express");
const router = express.Router();
const usercontroller = require("../controllers/usercontroller");
router.get("/", usercontroller.getindex);
router.post("/add-task",usercontroller.addtask);
router.post("/complete-task/:taskIndex",usercontroller.completeTask);
router.post("/delete-task/:taskIndex",usercontroller.deleteTask);
router.post('/update-task/:taskIndex', usercontroller.updatedTask);
module.exports = router;