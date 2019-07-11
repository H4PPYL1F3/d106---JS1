/*
    MEDIA PONDERADA(P1.X1 + PN.XN / PN)
*/

let nomeDoAluno = prompt("Qual é o nome do aluno");
let materia = prompt("Qual é a matéria");
let nota1 = prompt("Qual é a nota 1");
let nota2 = prompt("Qual é a nota 2");
let m = (nota1 + nota2) / 2;
let mf = 6;
let ms = 5.5

if(Number(m) >= ms || Number(m) < mf){
    alert(`Parabens, o aluno ${aluno} passou por pouco`);
}
else if (Number(m) < mf){
    alert(`Infelismente,o aluno ${aluno} foi reprovado`);
}else(Number(m) >= mf){
    alert(`Parabens, o aluno ${aluno} passou direto`);
}