const bcrypt = require("bcrypt")
const db = require("./models/index")
const jwt = require("jsonwebtoken")
const secretKEy  = "SecretKey"
// const vals = {
//     userName: "Vishnan",
//     Email:"Vishnuna26",
//     userPassword:"jabppbpi",
// }
// const roleArray = ["Seller","Admin","Chimanga"]

// const Create = db.user.create(vals).then(resp=>{
//     console.log("successfull")
//     db.role.findAll({
   
//         name:{
//             [db.Sequelize.Op.or]:roleArray
//         }
//     }).then(role=>{
//         resp.setRoles(role).then(response=>{
//             console.log(response)
//         }).catch(err=>{
//             console.log(err)
//         })
//     }).catch(err=>{
//         console.log(err)
//     })
// }).catch(err=>{
//     console.log(err)
// })
// const userName="Vishnan"
// const email ='Jaja@gmail.com'
// const userPassword ='autho'
// const sign =function(){
// if(userName && email && userPassword){
//     db.user.findAll({
//         where:{
//             userName:userName
//         }}).then(values=>{
//             if(!values){
//                console.log("No such User exists")
//             }else{
//                 values.getRoles().then(roles=>{
//                     console.log(roles)
//                 })
//             }
//         }).catch(err=>{
//             console.log(err)
//         })
            


        
// }
// }
// sign()


// const saltRounds =10
// var password ="VishnuNAir11"
// var password2="VishnuNAir11"

// // bcrypt.genSalt(saltRounds,(err,salt)=>{
// //     console.log(salt)
// //     bcrypt.hash(password, salt, function(err, hash) {
// //         // returns hash
// //         console.log(hash);
// // })
// // })
// bcrypt.hash(password,saltRounds,(err,hash)=>{
//     bcrypt.compare(password2,hash,(err,salt)=>{
//         console.log(salt)
//     })
// })
// signin = () =>{
//     db.user.findOne({
//         where:{
//             userName: "JASSmine"
//         }
//     }).then(user1 =>{
//         if(!user1){
//        console.log(`message:"User not found`);
//         }

//         // var isValidPassword = bcrypt.compareSync(req.body.password, user.password);
//         // if(!isValidPassword){
//         //     return res.status(401).send({
//         //         message:"Invalid Password"
//         //     })
//         // }

//         var token = jwt.sign({id: user1.id}, secretKEy, {
//             expiresIn: 86400 //24 hours
//         })
// // //[{"1", "customer"}, {"2", "admin"}] => ["ROLE_CUSTOMER", "ROLE_ADMIN"] <= authorities
// //         var authorities = [];
// //         user1.getRoles().then(roles =>{
// //             for(let i =0; i<roles.length; i++){
// //                 authorities.push("ROLE_"+roles[i].name.toUpperCase());
// //             }

// //             console.log({
// //                 id: user1.id,
// //                 username: user1.username,
// //                 email: user1.email,
// //                 roles: authorities,
// //                 accessToken: token
// //             })
// //         })

// //     }).catch(err =>{
// //         console.log({message: err.message});
// //     })
// // }
// // signin()

// var total = {
//     sum :0
// }

// total.sum = total.sum+1
// console.log(total.sum)
var arr = [1,2,3,4,4,5,2,6,1,7,7,9,8]
console.log([...arr])