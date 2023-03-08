const {v4: uuidv4 }=require("uuid");
const users=[
    {
        id:uuidv4(),
        name:"kauser hossain",
        email:"khankauser916@gmail.com"
    },
    {
        id:uuidv4(),
        name:"Junayed ahamed",
        email:"junayed321@gmail.com"
    }
]
module.exports=users;