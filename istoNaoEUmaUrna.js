function urnaEletronica() {
    let numeroCandidato = 0;
    let nulo = 0;
    let branco = 0;
    let candidato1 = 0;
    let candidato2 = 0;
    let candidato3 = 0;
    let numeroVotante = 0;
    let encerraVotacao = false;

    let candidato1Nome = prompt("Nome do candidato 1: ");
    let candidato2Nome = prompt("Nome do candidato 2: ");
    let candidato3Nome = prompt("Nome do candidato 3: ");

    window.alert("**Opções de voto **\n\n1- " + candidato1Nome + "\n" + "2- " + candidato2Nome + "\n" + "3- " + candidato3Nome + "\n" + "6- Voto Nulo" + "\n" + "9- Voto em Branco" + "\n" + "PIN- Encerrar votação" + "\n\n");

    do {
        let confirmaNumeroCandidato = parseInt(prompt("Digite o número do candidato: "));

        if(confirmaNumeroCandidato == 1234){
            numeroCandidato = confirmaNumeroCandidato;
        }
        else{
            confirmacao(confirmaNumeroCandidato);
        }
        
        switch (numeroCandidato) {
            case 1:
                candidato1++;
                numeroVotante++;
                window.alert(candidato1Nome + " recebeu 1 voto. \n");
                break;
            case 2:
                candidato2++;
                numeroVotante++;
                window.alert(candidato2Nome + " recebeu 1 voto. \n");
                break;
            case 3:
                candidato3++;
                numeroVotante++;
                window.alert(candidato3Nome + " recebeu 1 voto. \n");
                break;
            case 6:
                nulo++;
                numeroVotante++;
                window.alert("O voto foi nulo. \n");
                break;
            case 9:
                branco++;
                numeroVotante++;
                window.alert("O voto foi em branco. \n");
                break;
            case 1234:
                console.clear;
                window.alert("Deseja REALMENTE encerrar a votação?");
                let confirmaEncerramento = prompt("Digite 'S' para finalizar votação ou 'N' para continuar a votação");

                if (confirmaEncerramento == "s" || confirmaEncerramento == "S") {
                    encerraVotacao = true;
                    break;
                }
            default:
                window.alert("1- " + candidato1Nome + "\n" + "2- " + candidato2Nome + "\n" + "3- " + candidato3Nome + "\n" + "6- Voto Nulo" + "\n" + "9- Voto em Branco" + "\n" + "PIN- Encerrar votação" + "\n\n");
        }
    } while (encerraVotacao === false);

    if (candidato1 > candidato2 && candidato1 > candidato3) {
        candidato1 = candidato1 + branco;
    }
    else if (candidato2 > candidato1 && candidato2 > candidato3) {
        candidato2 = candidato3 + branco;
    }
    else {
        candidato3 = candidato3 + branco;
    }


    console.clear;

    let percentualCnadidato1 = (candidato1 / numeroVotante) * 100;
    let percentualCandidato2 = (candidato2 / numeroVotante) * 100;
    let percentualCandidato3 = (candidato3 / numeroVotante) * 100;

    window.alert("Valor do percentual de votos para " + candidato1Nome + " é: " + percentualCandidato1, "%. \n");
    window.alert("Valor do percentual de votos para " + candidato2Nome + " é: " + percentualCandidato2, "%. \n");
    window.alert("Valor do percentual de votos para " + candidato3Nome + " é: " + percentualCandidato3, "%. \n");

    if (candidato1 > candidato2 && candidato1 > candidato3) {
        window.alert(candidato1nome + " ganhou a votação!");
    }
    else if (candidato2 > candidato1 && candidato2 > candidato3) {
        window.alert(candidato2nome + " ganhou a votação!");
    }
    else {
        window.alert(candidato3nome + " ganhou a votação!");
    }

    function audioConfirmacao() {
        const audio = new Audio("./confirma-urna.mp3");
        audio.play();
    }

    function confirmacao(confirmaNumeroCandidato) {
        let confirma = prompt("\n Você confirma o seu voto? \n\n Digite 'S' para Sim \n Digite 'N' para Não \n");
        if (confirma == "S" || confirma == "s") {
            numeroCandidato = confirmaNumeroCandidato;
            audioConfirmacao();
        }
    }
}
