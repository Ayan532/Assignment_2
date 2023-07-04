const express=require('express');
require('dotenv').config({ path: './config/config.env' })

const app=express()

const auth=require('./routes/authRoutes')
const company=require('./routes/companyRoute')

app.use(express.json())

/*---------------------------Question-A---------------------------------------------------------------*/
app.use('/api/v1/auth',auth);



/*---------------------------Question-B---------------------------------------------------------------*/

/*Question-B

  Assuming that the Table is already been created in mqsql
  
*/

app.use('/api/v1/company',company);


app.listen(process.env.PORT,()=>{
    console.log(`Server running at PORT:${process.env.PORT}`)
})

