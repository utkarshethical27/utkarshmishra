const express = require('express')
const app = express()

app.set('view engine','hbs')
app.set('views','./public')

app.get('',(req,res)=>{
    res.render('index')
})
app.post('',(req,res)=>{
    res.download('public/cv.pdf')
})

app.listen(80,()=>{
    console.log('Server started')
})