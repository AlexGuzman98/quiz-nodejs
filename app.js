const colors = require('colors/safe');
const Additions = require('./index');
const args = process.argv.slice(2);
const [nombre = 'Amigo'] = args;
const hora = new Date().getHours();

if (hora >= 6 && hora <12){
    console.log(colors.green(`Buenos dias ${nombre}`));

}else if (hora >= 12 && hora < 18){
    console.log(colors.blue(`Buenos Tardes ${nombre}`));
}else{
    console.log(colors.rainbow(`Buenas Noches ${nombre}`));
}
//Resultados
console.log(Additions.Mayor())
console.log(Additions.Menor())
console.log(Additions.Sumatoria())
console.log(Additions.Order())
