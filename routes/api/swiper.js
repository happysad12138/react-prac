let express = require('express');
let router = express.Router();
let mgdb = require('../../common/mgdb');
let pathLib = require('path')
let fs = require('fs');

//查询
// router.get('/', (req, res, next) => {
  
//     mgdb({
//       collection: 'banner'
//     }, ({ collection, client }) => {
//       collection.find().toArray((err, result) => {
//         if(err){
//           res.send({error:1,msg:'失败'})
//         }else{
//           let checkResult = result
//           res.send({ error: 0, msg: '成功', data: checkResult })
//         }
         
//           client.close();//关闭连接
//         })
//     })
  

// })




router.get('/', (req, res, next) => {
  
  
  mgdb({
    collection: 'banner'
  }, ({ collection, client, ObjectID }) => {
   
    collection.find(
     
    ).toArray((err, result) => {
        // console.log(result);//成功条件 result.length > 0
        if (result.length > 0) {
          res.send({ error: 0, msg: '成功', data: result })
        } else {
          res.send({ error: 0, msg: "失败" })
        }
        client.close();//关闭连接
      })
  })
  

})

//添加 

//删 

//改


module.exports = router;