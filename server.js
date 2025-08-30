// var add=function(a,b){
//     let ans=a+b;
//     return ans;
// };

// var add=(a,b)=>{ return a+b};
// var add=(a,b)=>a+b;
// var ans=add(3,5798);
// console.log(ans);


// var add=(a,b,callback)=>{
//     var ans=a+b;
//     console.log(ans);
//     callback();
// };

// add(2,3,()=>{console.log("hello")});
 
// var fs=require('fs');
// var os=require('os');
// var userInfo=os.userInfo();
// console.log(userInfo.username);

// fs=fs.appendFile("gretting.txt","hii "+userInfo.username+"\n",()=>{
//     console.log("file is created");
// }); 

// let exp=require('./notes.js');

// console.log(exp.add(8,5870));


// var _=require('lodash');
// var arr=[1,2,3,4,3,2,1,4,5,6,6];
// var res=_.uniq(arr);
// console.log(res);
// var str="bhanu";
// console.log(_.isString(str));

// const data='{"name":"Bhanu","age":25}';
// console.log(data);
// var data_json=JSON.parse(data);
// console.log(data_json.age);

// var data_string=JSON.stringify(data_json);
// console.log(data_string.age);


const express =require('express');
const app = express();
const db = require('./db');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('welcome to this amazing journey of backend!!!!1');
});

// import router files
const personRoutes= require('./routes/personRoutes');
const menuRoutes=require('./routes/menuRoutes');
app.use('/menu',menuRoutes);
app.use('/person',personRoutes);
app.listen(3000,()=>{
    console.log("Server is running on port number 3000");
});