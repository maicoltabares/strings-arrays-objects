const fullName = prompt(`ingrese su nombre y apellio`).toLocaleLowerCase;

let text = (fullName);
const myArray = text.split(" ");
let  = myArray[1];
console.log(myArray);

const name =(fullName.split(" ")[0]);
console.log(name.slice(0, 3));

const subname =(fullName.split(" ")[1]);
console.log(subname.slice(0, 3));

let name1 =(name.slice(0, 3));
let subname1 =(subname.slice(0, 3));
const nombreCompleto = name1.concat(subname1);
console.log(nombreCompleto.toLowerCase());

const email = nombreCompleto.concat("@myDomain.com");
console.log(email.toLowerCase());