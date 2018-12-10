var express=require('express');
var pool=require('mysql').createPool({
      user:'root',
      database:'namelist'
})
module.exports=function(sql,arr,ck){
      pool.getConnection(function(err,con){
          if(err){
              return ck&&ck(err)
          }
          con.query(sql,arr,function(err,result,filed){
              if(err){
                  return ck&&ck(err)
              }
              ck&&ck(result);
              con.release()
          })
      })
}