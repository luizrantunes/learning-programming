<h1 align="center"> Treinamento de lógica - Desafio </h1>

<p align="center">
Este desafio foi proposto pelo Luiz Henrique Mariano de Araujo.<br/><br/>
"Escreva um algoritmo que imprima todas as subsequências não vazias de uma cadeia de caracteres ASCII dada.<br/>
Por exemplo, as subsequências não vazias de ABC são A, B, C, AB, AC, BC e ABC."<br/><br/>
</p>

- Começando o desafio na linha 2, aqui defino a função dizendo que ela recebe um valor como parametro;
- Decido declarar algumas variáveis por fora e antes para ficar mais fácil o entendimento;
- Assim, a variável é vazia porque ainda não sabe o valor que vai receber, porém, defini ela como string;
- Defini que o indice começaria em 0 (A);
- Na linha 5, o indice é A e enquanto ele for menor que o tamanho do parametro ele vai incrementar para a próxima letra;
- No console.log da linha 6, imprimo o indice atual com as letras soltas (A, B e C);
- Crio a variável auxiliar para que ela percorra todas as letras a frente da variável indice;
- Então na linha 8, o auxiliar é B e enquanto ele for menor que o tamanho do parametro ele vai incrementar para a próxima letra;
- Em seguida crio uma variável chamada saída que concatena a variável indice com a variável auxiliar;
- E abaixo dessa concatenação, utilizo o console.log novamente para imprimir o resultado acima;
- Chamo uma última vez o console.log para imprimir o valor recebido pela função (ABC);
- E por fim chamo a função criada trazendo o resultado:
  A
  AB
  AC
  B
  BC
  C
  ABC
