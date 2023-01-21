# Quantos jogos consigo comprar? #

Este programa informa a quantidade de jogos que o usuário pode comprar baseado no valor informado no campo de prompt.

- O programa inicia usando a variável money para receber a entrada do valor informado pelo usuário;
- Em seguida a variável gameQuantity pega o valor informado e faz a divisão por 100;
- Feito a divisão, então utilizo a função Math.floor para arredondar o valor como inteiro para baixo, evitando assim que valores menores tragam resultados inteiros;
- Também utilizo o document.getElementById para que possa imprimir o resultado na página HTML;
- E por fim uso algumas condicionais que informam se o usuário pode comprar o jogo, utilizando o plural ou informando que não pode comprar jogos.
