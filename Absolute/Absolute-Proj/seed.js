require('dotenv').config()
require('./config/database')

const Program = require('./models/program')

const createProgram = async()=>{
  try{
    const doc = await Program.create({
      name: 'weight loss uno',
      duration: 50,
      workout: '20 sit ups and 20 sit downs'
    })
    console.log('program created', doc)
  } catch(err){
    console.log(err)
  }
}

createProgram()