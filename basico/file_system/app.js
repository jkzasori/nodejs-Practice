const fs = require('fs');

console.log('Iniciado')

// fs.readFile('data.txt', 'utf-8', (error, data)=> {
// 	if (error) {
// 		console.log(`Error ${error}`);
// 	}else{
// 		console.log(data)
// 	}
// });

let data = fs.readFileSync('data.txt', 'utf-8');
console.log(data);

console.log('Finalizado')

// fs.rename('data.txt', 'data_renombrado.txt', (error)=>{
// 	if(error) throw error;
// 	console.log('Renombrado');
// })

// fs.appendFile('data.txt', '\n Gracias por leerme', (error)=> {
// 	if (error) { console.log(`Error ${error}`)}
// })

// //elimina archivo
// fs.unlink('data2.txt', (error)=>{
// 	if (error) {throw error};
// 	console.log('Eliminado');
// })

//copia archivo
// fs.createReadStream('data.txt').pipe(fs.createWriteStream('data3.txt'));

// fs.readdir('./../../basico', (error, files)=>{
// 	files.forEach(file=> {
// 		console.log(file);
// 	})
	
// })

fs.readdirSync('./../../basico', (error, files)=>{
	files.forEach(file=> {
		console.log(file);
	})
	
})
