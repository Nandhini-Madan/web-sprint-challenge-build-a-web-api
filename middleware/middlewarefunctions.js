const projectdb=require("../data/helpers/projectModel")
const actiondb=require("../data/helpers/actionModel")


//ValidateProjectID
function validateID(){
return(req,res,next)=>{
    console.log("getdata")
 
    projectdb.get(req.params.id)
  
    .then((data)=>{
        if(data){
            req.user=data
        
          next()
        }
        else{
            res.status(400).json({
                message:"NULL"
            })
        }
    })
    .catch((error)=>{
        next(error)
    })
}
}
//validteUserdata
function validatedata(){
    return(req,res,next)=>{
        console.log("Validate data",req.body.name)
        
        if(!req.body){
            res.status(400).json({
                message:"User data not available"
            })
            next()
        }
        else if(!req.body.name||!req.body.description){
            res.status(400).json({
                message:"name or description not available"
            })
            next()
        }
       next()
    }
}
function validateactionID(){
    return(req,res,next)=>{
        console.log("getdata")
     
        actiondb.get(req.params.id)
      
        .then((data)=>{
            if(data){
                req.user=data
            
              next()
            }
            else{
                res.status(400).json({
                    message:"NULL"
                })
            }
        })
        .catch((error)=>{
            next(error)
        })
    }
    }
    //validteUserdata
    function validateactiondata(){
        return(req,res,next)=>{
            console.log("Validate data",req.body)
            
            if(!req.body){
                res.status(400).json({
                    message:"User data not available"
                })
                next()
            }
            else if(!req.body.notes||!req.body.description){
                res.status(400).json({
                    message:"name or description not available"
                })
                next()
            }
           next()
        }
    }

module.exports={
    validateID,
    validatedata,
    validateactionID,
    validateactiondata

}