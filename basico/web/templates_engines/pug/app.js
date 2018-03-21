const express = require('express');
const app = express();

let personas = [
    {
        id: 1,
        nombre: "jkzasori"
    },
    {
        id: 2,
        nombre: "zasori"
    },
    {
        id: 3,
        nombre: "José"
    }
]

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('template', { titulo: 'pug', mensaje: 'jkzasori | Pug', personas: personas });
});


app.listen(3000, () => {
    console.log('Corriendo en el puerto 3000')
});