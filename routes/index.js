var express = require('express');
var router = express.Router();
const userModel = require('./users')


//router.get('/',function(req,res){
  //res.render("index")
//})

//router.get('/create',async function(req,res){
  //const createduser = await userModel.create({
    //username: 'Jon',
    //name: 'Jon Star',
    //age: 25
  //});
  //res.send(createduser)
//})

router.get('/alluser',async function(req,res){
  let alluser = await userModel.find()
  res.send(alluser)
})

//router.get('/alluser',async function(req,res){
  //let alluser = await userModel.findOne({username:'Jon'})
  //res.send(alluser)
//})

router.get('/delete',async function(req,res){
  let deleteduser = await userModel.findOneAndDelete({
    username:'Jon'
  })
  res.send(deleteduser)
})

//session
//router.get('/',function(req,res){
  //req.session.ban = true
  //res.render("index")
//})

router.get('/checkban',async function(req,res){
  if(req.session.ban === true){
    res.send('your ban')
  }
  else {
    res.send('not band')
  }
})

router.get('/deleteban',async function(req,res){
  req.session.destroy(function (err){
    if (err) throw err
    res.send('ban removed')
  })
})

//cookies
router.get('/',function(req,res){
  res.cookie('age',25)
  res.render("index")
})

router.get('/readcookies',function(req,res){
  console.log(req.cookies.age)
  res.send('check')
})

router.get( '/deletecookies',function(req,res){
res.clearCookie('age')
res.send('clear cookie')
})

module.exports = router;
