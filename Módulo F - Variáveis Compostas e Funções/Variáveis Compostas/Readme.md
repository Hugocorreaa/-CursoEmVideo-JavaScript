# Variáveis Compostas

*Vetores ou Arrays.*

Guardam mais de um valores em uma mesma estrutura.

Um vetor é uma variável que tem vários **elementos**, cada elemento é composto por seu **valor** e por uma **chave** de identificação (key ou índice).



## Declaração

```javascript
let num = [5, 8, 4]

```

| Vetor | Elementos | Valor | Índice |
| :---: | :-------: | :---: | :----: |
|  num  |     3     |   5   |   0    |
|       |           |   8   |   1    |
|       |           |   4   |   2    |

------

## Comandos

|     Comando      |                            Função                            | Exemplo |
| :--------------: | :----------------------------------------------------------: | :-----: |
|   `num[3] = 6`   | Cria mais um elemento na chave "3" e coloca o valor "6" dentro. |         |
|  `num.push(7)`   |  Cria mais um elemento adicionando após o ultimo elemento.   |         |
|   `num.length`   |            Mostra quantos elementos tem no vetor.            |         |
|   `num.sort()`   |     Pega todos os elementos e coloca em ordem crescente.     |         |
|     `num[x]`     |          Mostra o valor na posição x, começa no 0.           |         |
| `num.indexOf(x)` |              Pesquisa o valor x dentro do vetor              |         |

### Percurso de exibição

Modo Clássico:

```javascript
let valores = [8, 1, 7, 4, 2, 9]

for (let pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}

8
1
7
4
2
9
```

Exemplo:

```javascript
let valores = [8, 1, 7, 4, 2, 9]

for (let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor valores[pos]`)
}

A posição 0 tem o valor 8
A posição 1 tem o valor 2
A posição 2 tem o valor 7
A posição 3 tem o valor 4
A posição 4 tem o valor 2
A posição 5 tem o valor 9

```





Modo Simplificado:

```javascript
let valores = [8, 1, 7, 4, 2, 9]

// para cada posição em num, mostre o num[pos]
for(let pos in num ){  
    console.log(num[pos])
}

8
1
7
4
2
9
```



Exemplo:

```javascript
let valores = [8, 1, 7, 4, 2, 9]

for (let pos in valores){
    console.log(`A posição ${pos} tem o valore ${valores[pos]}`)
}

A posição 0 tem o valor 8
A posição 1 tem o valor 2
A posição 2 tem o valor 7
A posição 3 tem o valor 4
A posição 4 tem o valor 2
A posição 5 tem o valor 9

```

