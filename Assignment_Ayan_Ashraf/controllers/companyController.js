const { db } = require("../config/dbConnect");

exports.getUserFromCompanyId=async(req,res)=>{

    const {companyId}=req.params;
    const query=`SELECT * FROM users WHERE companyId = ? `


    db.query(query,[companyId],(err,result)=>{
        if(err){
            return res.status(404).json({
                message:`NO user Found with company id:${companyId}`, 
                err:err
            })
        }else{
            return res.status(200).json({
                message:`User Found`,
                result 
            })

        }

    })

}