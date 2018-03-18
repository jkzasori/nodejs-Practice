const _ = require('lodash');
const argv = require('yargs').argv;


// let comando = process.argv[2];
if (argv.usuario === 'jkzasori') {
	// if (process.argv[3] == 'jkzasori') {
		let x = {"nombre": "José"}
		let y = { "apodo": "jkzasori"}
		let z = [
			{nombre: "José", apellido: "Támara", edad: 99},
			{nombre: "Paige", apellido: "Sunk", edad: 23},
		]
		//concatena
		let resultado =_.assign(x,y);
		console.log(resultado);
		//repite una funcion n veces
		// _.times(3, ()=> console.log('Holallll'));

		//encontrar valores de un objeto
		// let resultado = _.find(z, {nombre: "José"});
		// console.log(resultado)
	// }
}else{
	console.log('usuaro no valido');
}


