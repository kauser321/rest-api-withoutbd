let users=require("../modles/user.model");
const {v4: uuidv4}=require("uuid")
// get users
const getUsers=(req,res)=>{
    res.status(200).json({
       users 
    })
};
// creat user
const creatUser=(req,res)=>{
    const newUser={
        
        id:uuidv4(),
        name:req.body.name,
        email:req.body.email
    }
    users.push(newUser)
    res.status(201).json( users)
}
// update user
const updateUser=(req,res)=>{
   const id=req.params.id;
   const {name,email}=req.body;
   users.filter((user)=>user.id=id).map((selectedUser)=>{
    selectedUser.name=name;
    selectedUser.email=email
   })
   res.status(200).json(users)
}
// delete users
const deleteUsers=(req,res)=>{
    const id=req.params.id;
    users=users.filter((user)=>user.id!==id);
    res.status(200).json(users)
}
module.exports={getUsers,creatUser,updateUser,deleteUsers}