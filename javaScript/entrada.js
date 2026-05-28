let nomeAluno = prompt("Qual é o nome do aluno?");
let nota1 = prompt(`Digite a primeira nota do ${nomeAluno}:`);
let nota2 = prompt(`Digite a segunda nota do ${nomeAluno}:`);
let n1Convertida = Number(nota1);
let n2Convertida = Number(nota2);
let media = (n1Convertida + n2Convertida) / 2;
if (media >= 7) {
    alert(`Parabéns! ${nomeAluno} foi aprovado com média ${media}!`);
}
else if (media < 7 && media >= 3) {
    alert(`Atenção: ${nomeAluno} ficou em recuperação com média ${media}.`);
    let nota3 = prompt(`Digite a nota da recuperação ${nomeAluno}:`);
    let n3Convertida = Number(nota3);
    let mediaNova = (media + n3Convertida) / 2;
        if (mediaNova >= 5) {
            alert(`Parabéns! ${nomeAluno} foi aprovado com média ${mediaN}!`);
    }
        else {
            alert(` ${nomeAluno} foi reprovado com média ${mediaNova}!`);
    }
}
let desejaContinuar = confirm("Deseja realizar o cálculo para outro aluno?");
if (desejaContinuar) {
    console.log("O usuário escolheu continuar o sistema.");
} 
else {
    console.log("O usuário encerrou as consultas.");
}
                                                    