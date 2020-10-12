module.exports=()=>{
    return(req,res,next)=>{
        const time=new Date().toISOString()
        console.log(`logger [${req.method}] [${req.url}] [${time}]`)
        next()
    }
}