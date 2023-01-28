
/*function combinacaoLetra(str) {
    let saida = ""
    let indice = 0
    for (indice; indice < str.length; indice++) {
        console.log(str[indice])
        let auxiliar = indice + 1
        for (auxiliar; auxiliar < str.length; auxiliar++) {
            saida = str[indice] + str[auxiliar]
            console.log(saida)
        }
    }
    console.log(str)
}

combinacaoLetra("ABC") */

// Código acima inválido como resposta do enunciado

function combinacaoLetra(str) {
    let binario = str.length;
    let indice = 0
    for (indice; indice < (1 << binario); indice++) {
        let saida = "";
        let auxiliar = 0
        for (auxiliar; auxiliar < binario; auxiliar++) {
            if (indice & (1 << auxiliar)) {
                saida += str[auxiliar];
            }
        }
        if (saida.length > 0) {
            console.log(saida);
        }
    }
}

combinacaoLetra("MOVEL");