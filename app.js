const express = require ('express')
const app = express()
const db = require ("./models/index.js")
const server = require("./CONFIG/serverConfig")
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

 function init(){
    var rolesData =[{
        name:"Buyer"
    },{
        name:"Seller"
    },
    {
        name:"Admin"
    }
]
    var userData=[{
        userName:"Vishnu",
        Email :"Jaja@gmail.com",
        userPassword:"autho",

    },
    {
        userName:"vick",
        Email:"LALAA",
        userPassword:"author",

    }]
    var categoryData = [{
        name:"Electronics",
        description: "All the electronics is in here"
    },
    {
        name:"Groceries",
    description: "All the Groceries is in here"
    }]
    var productData = [{
        name:"Nokia",
        description: "electro",
        price :20000,
        CategoryId :1
    },
    {
        name:"ladysfinger",
        description: "Groceries is in here",
        price:15,
        CategoryId :2

    }]

    db.category.bulkCreate(categoryData).then(()=>{
        console.log("Its done")
    })
    .catch((err)=>{
        console.log("Error",err)
    })
    db.products.bulkCreate(productData).then(()=>{
        console.log("Its done")
    })
    .catch((err)=>{
        console.log("Error",err)
    })
    db.user.bulkCreate(userData).then(()=>{
        console.log("Its done")
    })
    .catch((err)=>{
        console.log("Error",err)
   })
   db.role.bulkCreate(rolesData).then(()=>{
    console.log("Its done")
})
.catch((err)=>{
    console.log("Error",err)
})
}
db.category.hasMany(db.products);


db.sequelize.sync({force:true}).then(()=>{
    console.log("The DB has been connected and the models/tables have been recreated...")
    init()
});
require("./routes/UserSign.route")(app) 
require("./routes/Category.route")(app)
require("./routes/product.route")(app)
require("./routes/Cart.route")(app)
app.listen(process.env.PORT ,()=>{
    console.log("This is 3030 server");
});



