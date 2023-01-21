
function combinacaoLetra(str) {
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

combinacaoLetra("ABC")