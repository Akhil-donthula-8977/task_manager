const { response } = require('express');
const request=require('request')
const geocode=(address,callback)=>{
    const url='https://geocode.xyz/Hauptstr.,+57632+Berzhausen?json=1&auth=160320206839006270750x62980';
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('error',undefined)
        }
        else{
            callback(undefined,response)

        }
    })
}
geocode('hello',(error,data)=>{
console.log(data.body.latt);
})
exports=geocode