
// const request=require('request');
// const weatherfunc=(address,callback)=>{
//      const url='http://api.weatherapi.com/v1/current.json?key=7e4924a794dc4e339a385223222406&q='+address;
//      request({url:url,JSON:true},(error,response)=>{
          
//           const Data=JSON.parse(response.body);
//        if(error){
//             callback("please enter a valid address",undefined);
//        }
//          else{
//               callback(undefined,{
//                    tempc:Data.current.temp_c,
//                    tepmf:Data.current.temp_f
//               });
//    }
//      })
// }

