// 1 diaria semana (2º a 6º) = 150;
// 3 diaria semana = -10%;
// 7 dias = diaria sair a 124;
// fim de semana = 600;
// pix ou dinheiro ou debito = -5%;
// quarto  de casal = +50;
// hospede = nome, telefone, cpf e idade (maior);
// escolher o tipo do quarto (casal ou solteiro), fim de semana ou dia utel e forma de pagamento
// menu repete
do {
    let op = prompt("Escolhar uma das seguintes opções: "+
        "1) Cadastrar hospede;"+
        "2) Escolhar estadia;"+
        "3) Calcular conta;"+
        "0) Sair."
    );
    switch (op){
        case 1:
            let hospede = cadastrarHospede();
            cpf
            break;
        case 2:
            let estadia = cadastrarEstadia()
            break;
        case 3:
            let valorTotal = Number(estadia.split(";"))//valorQuarto;valorTotal;qtdDias
            let valorTotal = aux[1];
            break;
        case 0:
            alert("Saindo do sistema!");
        default:
            alert("Opção invalida!");
            break;
    }
}  while(op != 0)
function cadastrarHospede (){
    let nome = prompt(" digite nome do hospede: ");
    let telefone = String(prompt("digite telefone do hospede: "));
    do{
        let cpf = String(prompt("digite CPF do hospede: "));

    } while (!(validarCPF(cpf)));
    do{
        let idade = prompt("digite idade do hospede: ");

    } while(!(validarMaiorIdade(idade)));
}
function validarCPF (cpf){
    if (((String(cpf)).length) == 11) return true;
    else return false;

}
function validarMaiorIdade (idade){
    if (Number(idade) >= 11 ) return true;
    else return false;

}
function cadastrarEstadia(){
    let valorQuarto = isCasal()
    let tDia = tipoDia
    valorQuarto= valorQuarto + tipoDia()
    let qtdDias = Number(prompt("Digite a quantidade de dias desajados"));
    let valor = valorEstadia(tDia,qtdDias)
    return valorQuarto+";"+ tipoPacote+";"+qtdDias;
}
function isCasal(){
    let valor;
    do {
        let tipoQuarto = prompt("Digite o tipo de quarto: "+
        "1) Solteiro;"+
        "2) Casal."
    );
        switch(tipoQuarto){
            case 1:
                valor = 0;
                break;
            case 2:
                valor = 50;
                break;
            default:
                alert("Opção invalida!")
                break;
            }
    } while(tipoQuarto !== 1 || tipoQuarto !== 2);
    return valor;
}
function tipoDia(){
    let valor;
    do {
        let qDia = prompt("Escolhar o tipo do dia: "+
        "1) fim de semana;"+
        "2) dia util."
    );
        switch(qDia){
            case 1:
                valor = 300;
                break;
            case 2:
                valor = 150;
                break;
            default:
                alert("Opção invalida!")
                break;
            }
    } while(qDia !== 1 || qDia !== 2);
    return valor;
}
function valorEstadia(){
    if(valorQuarto === 150){
        if(dia<3) return dia * 150;
        else if (dia>=3 && dia<7) return dia * 135;
        else return dia * 124;
    }
}
function 