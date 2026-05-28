function calcularMRU() {
    alert("Fórmula: s = s0 + v . t");

    let s0 = Number(prompt("Digite a posição inicial:"));
    let v = Number(prompt("Digite a velocidade:"));
    let t = Number(prompt("Digite o tempo:"));

    return s0 + (v * t);
}

function calcularVariacaoVelocidade() {
    alert("Fórmula: DV = Vf - Vi");

    let VF = Number(prompt("Digite a Velocidade Final:"));
    let VI = Number(prompt("Digite a Velocidade Inicial:"));

    return VF - VI;
}

function calcularDistancia() {
    alert("Fórmula: DS = v . t");

    let v = Number(prompt("Digite a velocidade:"));
    let t = Number(prompt("Digite a variação de tempo:"));

    return v * t;
}

alert("Selecione a fórmula da física");
alert("1: Movimento Retilíneo Uniforme");
alert("2: Variação de velocidade");
alert("3: Distância percorrida");
alert("0: Sair");

let opcao = prompt("Opção selecionada:");

if (opcao == 1) {
    let resultado = calcularMRU();
    alert("Espaço final = " + resultado);
}
else if (opcao == 2) {
    let resultado = calcularVariacaoVelocidade();
    alert("Variação de velocidade = " + resultado);
}
else if (opcao == 3) {
    let resultado = calcularDistancia();
    alert("A distância percorrida é de " + resultado);
}
else {
    alert("Programa encerrado.");
}