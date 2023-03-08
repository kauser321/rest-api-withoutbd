const { getUsers, creatUser, updateUser, deleteUsers } = require("../contoller/user.controller");

const router=require("express").Router();
router.get("/",getUsers);
router.post("/",creatUser);
router.put("/:id",updateUser);
router.delete("/:id",deleteUsers)
module.exports=router
