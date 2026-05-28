alert("Selecione a formula da fisica");
alert("1: Movimento retilíneo uniforme");
alert("2: Variação de velocidade");
alert("3: Distancia percorrida");
alert("0: Sair");
let opçao = prompt("Opção selecionada: ");
if (opçao == 1){
    alert("s = s0 + v . Dt");
    let s0 = Number(prompt("Digite a posição inicial:"));
    let v = Number(prompt("Digite a velocidade:"));
    let t = Number(prompt("Digite o tempo:"));

    let s = s0 + (v * t);

    alert("Espaço final = " + s);

}
else if (opçao == 2){
    alert("DV = Vf – Vi")
    let VF = Number(prompt("Digite a Velocidade Final:"));
    let VI = Number(prompt("Digite a Velocidade Inicial:"));

    let DV =( VF - VI );

    alert("Variação de velocidade e = " + DV);
}
else {
    alert("DS = v . Dt")
    let v =Number(prompt("Digite a velocidade; "));
    let t =Number(prompt("Digite a varição de tempo: "))

    let DS = (v * t)

    alert("A distancia percorrrida e de " + DS)
} 