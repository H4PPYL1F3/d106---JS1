/*
    MEDIA  DA NOTA DE UM ALUNO

*/

let aluno = prompt("Qual é o nome do aluno");
let materia = prompt("Qual é a matéria");
let nota = prompt("Qual foi sua nota final ?");
let ms = 5.5;
let mf = 6.0;

if(Number(nota) >= ms && Number(nota) < mf){
    alert(`Parabens, o aluno ${aluno} passou por pouco`);
}
else if(Number(nota) < mf){
    alert(`Infelismente,o aluno ${aluno} foi reprovado`);
}
if(Number(nota) > mf){
    alert(`Parabens, o aluno ${aluno} passou direto`);
}

