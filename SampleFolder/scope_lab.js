function show(){
var functionVar = "Sou uma var com escopo de bloco";
let functionLet = "Sou um let com escopo de bloco";
const functionConst = "Sou um const com escopo de bloco";

console.log(functionVar);
}
show();

//console.log(functionVar); // Lança ReferenceError
//console.log(functionLet); // Lança ReferenceError
