# COMANDOS BÁSICOS

## - Declaração de Variáveis

    var + identificador = tipo primitivo
Exemplo:

    var numero = 1 
    var nome = "hugo" 
## - Identificadores
- Podem começar com letra, $ ou _
- Não podem começar com números.
- É possível usar letras ou números.
- É possível usar acentos e símbolos.
- Não podem conter espaços.
- Não podem ser palavras reservadas.

***Dicas:***
*- Maiúsculas e minúsculas fazem diferença.*
*- Escolher nomes coerentes para variáveis.*
*- Evitar ser 'programador alfabeto' ou 'programador contador'*.
## - Tipos Primitivos

|number| string  | boolean  | null  | undefined  | object  | function  |
|---|---|---|---|---|---|---|
| infinity | "maçã"  | true  |   |   |   |   |
| NaN  |   | false  |   |   |  array |   |

Exemplo:    
<a data-flickr-embed="true" href="https://www.flickr.com/photos/192926444@N07/51158981082/in/dateposted-public/" title="Captura de tela 2021-05-05 125809"><img src="https://live.staticflickr.com/65535/51158981082_59764188e4_z.jpg" width="640" height="177" alt="Captura de tela 2021-05-05 125809"></a><

Exemplo:    
<a data-flickr-embed="true" href="https://www.flickr.com/photos/192926444@N07/51158990222/in/dateposted-public/" title="ex002"><img src="https://live.staticflickr.com/65535/51158990222_4afa49c6cb_z.jpg" width="640" height="146" alt="ex002"></a><

## - Tratamento de Dados
- Conversão de Tipo

*Converter para **número**:*
|   |   |   |
|---|---|---|
| Number(n)  |   |  Converte **n** para número |
| Number.parseInt(n)    |   |  Converte **n** para número inteiro|
| Number.parseFloat(n)  |   | Converte **n** para número flutuante (decimal)  |

*Para escolher quantas **casas decimais** aparecem:*
<a data-flickr-embed="true" href="https://www.flickr.com/photos/192926444@N07/51159678236/in/dateposted-public/" title="ex003"><img src="https://live.staticflickr.com/65535/51159678236_a63001a373_z.jpg" width="640" height="146" alt="ex003"></a><

*Converter para **string**:*

|              |      |
| :----------- | ---- |
| String(n)    |      |
| n.toString() |      |

## - Operadores

- Aritméticos:

| Adição | Subtração | Multiplicação | Divisão Inteira |  Resto | Potência |
|:------:|:---------:|:-------------:|:---------------:|:------:|:--------:|
|  5 + 2 |   5 - 2   |     5 * 2     |      10 / 2     | 10 % 2 |  5  ** 2 |