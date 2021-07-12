const indexController = {
    index:(req,res)=>{
        return res.render("index",{title:"Netflix on DIO"})
    }
}

module.exports=indexController;