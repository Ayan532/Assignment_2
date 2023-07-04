const express=require('express')
const company=require("../controllers/companyController")
const router=express.Router()

router.route('/:companyId').get(company.getUserFromCompanyId)

module.exports=router