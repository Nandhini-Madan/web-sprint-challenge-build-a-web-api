const express=require("express")
const projectdb=require("../data/helpers/projectModel")
const { validateID, validatedata } = require("../middleware/middlewarefunctions")
const router=express.Router()

//GET
router.get('/:id',validateID(),(req,res)=>{
    console.log("Get all data based on ID")
   
    res.status(200).json(req.user)
    
})

router.post("/project",validatedata(),(req,res,next)=>{
    console.log("Insert data in projects")
  
    projectdb.insert(req.body)
    .then((post)=>{
        res.status(200).json(post)
    })
    .catch((error)=>{
        next(error)
    })
})

router.put("/:id/project",validateID(),(req,res,next)=>{
    console.log("update project")
    projectdb.update(req.params.id,req.body)
    .then((post)=>{
        res.status(201).json(post)
    })
    .catch((error)=>{
        next(error)
    })
})

router.delete("/:id",validateID(),(req,res,next)=>{
    console.log("delete project")
    projectdb.remove(req.params.id)
    .then((post)=>{
        res.status(200).json(post)
    })
    .catch((error)=>{
        next(error)
    })
})

router.get("/:id/actions",validateID(),(req,res,next)=>{
console.log("get actions")
projectdb.getProjectActions(req.params.id)
.then((post)=>{
    res.status(200).json(post)

})
.catch((error)=>{
    next(error)
})
})
module.exports = router;