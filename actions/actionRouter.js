const express=require("express")
const actiondb=require("../data/helpers/actionModel")
const { validateactionID, validateactiondata } = require("../middleware/middlewarefunctions")
const router=express.Router()

//GET
router.get('/:id/action',validateactionID(),(req,res)=>{
    console.log("Get all data based on ID")
   
    res.status(200).json(req.user)
    
})

router.post("/:id/action",validateactiondata(),(req,res,next)=>{
    console.log("Insert data in projects")
    const name=req.body.name
    const description=req.body
  //  console.log(data,"hjkk")
  const id=req.params.id
  const data={project_id:id,...req.body}
    actiondb.insert(data)
    .then((post)=>{
        res.status(200).json(post)
    })
    .catch((error)=>{
        next(error)
    })
})

router.put("/:id/action",validateactionID(),(req,res,next)=>{
    console.log("update project")
    actiondb.update(req.params.id,req.body)
    .then((post)=>{
        res.status(201).json(post)
    })
    .catch((error)=>{
        next(error)
    })
})

router.delete("/:id/action",validateactionID(),(req,res,next)=>{
    console.log("delete project")
    actiondb.remove(req.params.id)
    .then((post)=>{
        res.status(200).json(post)
    })
    .catch((error)=>{
        next(error)
    })
})


module.exports = router;