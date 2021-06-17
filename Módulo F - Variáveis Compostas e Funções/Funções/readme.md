# Funções

Toda função pode ter os seguintes fatores:

- Chamada
- Conjunto de Parâmetros
- Ação
- Retorno

*obs. Nem toda chamada tem parâmetros ou retorno*

Ou seja, funções são **ações** executadas assim que são **chamadas** ou em decorrência de algum **evento**. Ela pode receber **parâmetros** e retornar um **resultado**.



## Declaração

```javascript
function ação(parâmetro){

    return resultado
    
}
//chamada, dispara a execução da função.
ação(5)
```



ex.

```javascript
const sum = function (number1, number2){
    console.log(number1 + number2)
}

sum(2, 3) // 2 e 3 são argumentos = arguments
//
RESPOSTA DO CONSOLE
5
```

Exemplo: 

Saber se um número é par ou ímpar.

```javascript
function parimpar(n){
    if (n%2 == 0){
        return 'par'
    } else {
        return 'ímpar'
    }
}
let res = parimpar(11)
console.log(res)

RESPOSTA DO CONSOLE:
ímpar


```



Exemplo:

Soma de dois números.

```javascript
function soma(n1=0, n2=0){
    return n1 + n2
}

console.log(soma(2, 5))

RESPOSTA DO CONSOLE:
7
```



Exemplo:

Declarando uma função como variável.

```javascript
let v = funtion(x){
    return x*2
}

console.log(v(5))

RESPOSTA DO CONSOLE:
10
```



Exemplo:

Fatorial

```javascript
function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))
// 5! = 5 x 4 x 3 x 2 x 1 = 120

REPOSTA DO CONSOLE:
120
```



Exemplo:

Função recursiva

```javascript
function fatorial(n){
    if (n == 1) {
        return 1
    } else {
        return n* fatorial(n-1)
    }
    return fat
}

console.log(fatoral(5))
// 5! = 5. 4!


RESPOSTA DO CONSOLE:
120
```

