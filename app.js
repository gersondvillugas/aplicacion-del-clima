const lugar =require('./lugar/lugar')
const clima=require('./clima/clima')

const argv=require('yargs').options({
    direccion:{
        alias:'d',
      desc:'Direccion de la ciuda para obtener el clima',
      demand:true
    }
}).argv
console.log(argv.direccion)


let getInfo=async(direccion)=>{
    try{
        let coors=await lugar.getLugarLantLng(direccion);
        let temp=await clima.getClima(coors.lag,coors.lng);
        return `el clima en ${coors.direccion} es  de ${temp}`
    }
    catch(e){
       return `no se pudo determinar el clima en ${direccion}`
    }
   

}
getInfo(argv.direccion)
 .then(mensaje =>console.log(mensaje))
 .catch(e=>console.log(e))