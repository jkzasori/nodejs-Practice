const os = require('os');
const fs = require('fs');

const jo = require('./jose.js');

let cpu = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();

// jo.saludar();

setTimeout(() =>{
	console.log('Terminé')
}, 2000);

// console.log(sistema);
// console.log(usuario);
// // console.log(cpu);
// let cpu_string = JSON.stringify(cpu);
// fs.appendFile('prueba.txt', `Información del cpu: ${cpu_string}` , function(error){
// 	if(error){
// 		console.log('error al crear el archivo')
// 	}
// })