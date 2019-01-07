const axios=require('axios');
const getClima=async(lat,lng)=>{
let resp=await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=98e55b10ab5bcb44fdca3570c5fe41fc`)
return resp.data.main.temp;
}
module.exports={
    getClima
}