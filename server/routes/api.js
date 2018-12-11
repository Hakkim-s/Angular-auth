const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const db = "mongodb://userhakkim:Keepbboying@3@ds261969.mlab.com:61969/eventdb"

mongoose.connect(db, err =>{
  if(err){
    console.error('Error!' + err)
  } else{
    console.log('Connected to mongodb')
  }
})
router.get('/',(req, res) => {
  res.send('From API route')
})

module.exports= router
