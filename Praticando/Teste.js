function escolherQuarto (cpf){
    let quarto = prompt("Digite o tipo de quarto: ")
    if (quarto == "casal") return 50;
    else return 0;

}
function escolhardePeriodo (){
    let controle = true;
    do{
        let tipoQuarto = prompt("Escolhar o combo: \n1)Dia da semana; \n2) Fim de semana;\n3) Pacote Promociona.");
        switch(tipoQuarto){
            case 1:
                return 150;
            case 2:
                return 135;
            case 3:
                return 300;
            case 4:
                return 124;
            default:
                alert("opção invalida");
                controle = true;
                break;
        }
    } while(controle);
}
function calcularValorTotal (dia){
    let valor = dia * (escolherQuarto() + escolhardePeriodo());
}