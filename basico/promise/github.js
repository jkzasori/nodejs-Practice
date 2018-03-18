const fetch = require('node-fetch');

let promesa = fetch('https://api.github.com/users/jkzasori');
promesa.then((res)=>{
    return res.json();
}).then((json)=>{
    console.log(json);
});