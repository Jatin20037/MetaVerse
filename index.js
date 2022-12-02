const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const cloudinary = require("./cloudinary/cloudinary");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true , limit: '50mb'}));
app.use(express.json({limit: '50mb'}));
var { createPool } = require('mysql');
var pool = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'metaverse',
    connectionLimit: 10
});

app.post("/cloud", (req, res) => {
   var thumb= req.body.thumnail;
   var video= req.body.video;
   var name = req.body.name ;
   var desc = req.body.desc ;
   var date = req.body.date ;
   var lang = req.body.lang ;
   var views= req.body.views;
   var cate = req.body.category ;

   console.log(name );
   console.log(desc );
   console.log(date );
   console.log(lang );
   console.log(views);
   console.log(cate );
   
   cloudinary.uploader.upload(thumb,
  { resource_type: "image",
    upload_preset: 'yyckv7jb',
    public_id: `${Math.floor(Math.random() * 10000)}${date}thumbnail`,
    allowed_formats : ['png','jpg','svg','ico','bmp','gif','jfif','MP4','jfif','webp','avi','mov']

}, 
  function(error, result) {
   
    req.app.locals.resultnew=result;
  });



  cloudinary.uploader.upload(req.body.video,
    {resource_type: "video",
       upload_preset: 'nth3bolh',
      public_id: `${Math.floor(Math.random() * 10000)}${date}video`,
      allowed_formats : ['png','jpg','svg','ico','bmp','gif','MP4','jfif','webp','avi','mov']
  
  }, 
    function(error, result) {
      



      pool.query('select count(*) as total from movies', (err, result1, fields) => {
       
       pool.query('insert into movies values(?,?,?,?,?,?,?,?,?)', [result1[0]["total"],name,desc,date,lang,req.app.locals.resultnew.url,result.url,views,cate], (err, result2, fields) => {
       

           res.json(result);

         })
      })






    });



})


app.listen(3001, () => {
  console.log("running")
})