
function combinacaoLetra(str) {                                 // aqui defino a função dizendo que ela recebe um valor como parametro
    let saida = ""                                              // a variável é vazia porque ainda não sabe o valor que vai receber, porém, defini ela como string
    let indice = 0                                              // defini que o indice começaria com 0 (A)
    for (indice; indice < str.length; indice++) {               // indice A; enquanto ele for menor que o tamanho do parametro ele vai incrementar mais uma letra
        console.log(str[indice])                                // esse console.log printa o indice atual com as letras soltas
        let auxiliar = indice + 1                               // o auxiliar percorre todas as letras a frente do indice
        for (auxiliar; auxiliar < str.length; auxiliar++) {     // auxiliar AB; enquanto ele for menor que o tamanho do parametro ele vai incrementar mais uma letra a frente
            saida = str[indice] + str[auxiliar]                 // a variavel saida concatena o indice com o auxiliar
            console.log(saida)                                  // e aqui printa o resultado da concatenação
        }
    }
    console.log(str)                                            // esse console.log printa o valor recebido pela função
}

combinacaoLetra("ABC")                                          // aqui por fim é chamado a função criada