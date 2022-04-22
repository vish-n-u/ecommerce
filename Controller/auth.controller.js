const  bcrypt  = require("bcrypt")
const jwt = require("jsonwebtoken")
const Op = require("sequelize")
const db = require("../models/index")
const secretKey ="SecretKey"
const User = db.user
const Role = db.role



exports.signin = (req, res)=>{
    db.user.findOne({
        where:{
            userName: req.body.name
        }
    }).then(user1 =>{
        if(!user1){
            return res.status(404).send({message:"User not found"});
        }
        var isValidPassword = bcrypt.compareSync(req.body.userPassword , user1.userPassword);
        if(!isValidPassword){
            return res.status(401).send({
                message:"Invalid Password"
            })
        }

        var token = jwt.sign({id: user1.id}, secretKey, {
            expiresIn: 86400 //24 hours
        })
//[{"1", "customer"}, {"2", "admin"}] => ["ROLE_CUSTOMER", "ROLE_ADMIN"] <= authorities
        var authorities = [];
        user1.getRoles().then(roles =>{
            
            for(let i =0; i<roles.length; i++){
                authorities.push("ROLE_"+roles[i].name.toUpperCase());
            }

            res.status(200).send({
                id: user1.id,
                username: user1.userName,
                email: user1.Email,
                roles: authorities,
                accessToken: token
            })
        }).catch(err=>{
            res.status(404).send(err)
        })

    }).catch(err =>{
        res.status(500).send({messagesof1: err.message})
            console.log(err);
    })
}

exports.signup=(req,res,next)=>{
    User.create({
        userName:req.body.name,
        Email:req.body.email,
        userPassword : bcrypt.hashSync(req.body.userPassword,10)
    }).then(newUser=>{
        if(req.body.role){
        Role.findAll({
            where:{
                name: req.body.role
                }
            }).then(roles=>{   
                console.log("Roles:",roles)    
                newUser.setRoles(roles).then(Response=>{
                res.status(200).send(Response)
                }).catch(err=>{
                    console.log("Error:",err)
                })
        }).catch(err=>{
            console.log("Error:",err)
        })
        }
  
        else{
            db.role.findOne({
                where:{
                    name:"Buyer"
                }
            }).then(roles=>{
                newUser.setRoles(roles).then(val=>{
                    res.status(200).send(val)
                }).catch(err=>{
                    console.log("roles error:",err )
        })
    })
                
            
        //    
    
    }
    

}).catch(err=>{
    console.log("Error:",err)
})
}
//newUser.setRoles([1]).then(response=>{
    //         res.status(200).send(response)
    // }).catch(err=>{
    //         console.log("roles error:",err )
    //     })
    // }