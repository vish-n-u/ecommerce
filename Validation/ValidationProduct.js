
// const { category } = require("../models")

function name1(req,res,next){
    if(!req.body.name){
        res.status(400).send({
            message: "Name of the category can't be empty"
        })
        return;
        
}
    next();
}
function price(req,res,next){
    if(!req.body.price||req.body.price<=0){
        res.status(400).send({
            message: "price seems to be wrong"
        })
        return;
        
}
    next();
}

 
function productID(req,res,next){
    if(!req.params.id){
        res.status(400).send("ID has to be provided")
        return;
    }
    next()
}
function categoryId(req,res,next){
    if(!req.body.categoryId){
        res.status(400).send("You Cant create a new product without categoryId")
        return
    }
    if(req.body.categoryId){
        category.findByPk(req.body.categoryId).then((response) =>{
            if(!response){
                res.status(400).send("no such id exists")
                console.log(response)
                return;
            }
            else{
                next()
           }
            
        }).catch(err=>{console.log("Internal err")})
        
    }
       
        
    
}
function CproductID(req,res,next){
  
        if(req.params.categoryId){
            let categoryId = req.params.categoryId
            category.findByPk(categoryId).then((response) =>{
                if(!response){
                    res.status(400).send("no such id exists")
                    console.log(response)
                    return;
                }
                else{
                    next()
                }
            
            }).catch(err=>{
                console.log("Internal err occured",err)
            })
        
    }else{
        res.status(400).send("You have to provide category ID")
        return;
    }
   
}
const productValidation = {name1,price,productID,categoryId,CproductID}
module.exports = productValidation