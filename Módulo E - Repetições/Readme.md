# Módulo E: Repetições :infinity:
Podem ser chamadas também de *laços* ou *iterações*.
## - Repetições com teste no início (while)
Todo comando será executado enquanto a condição for verdadeira.
```javascript 
while (condição){
	
}
```
- **Ordem:**
1º Teste
2º Executa
3º Looping



Exemplo:
"Enquanto c for menor igual a 6, escreva 'Tudo bem?' "
```javascript
var c = 1
while (c <= 6){
	console.log('Tudo bem?')
	c++
}
```
Serão escritos 6 "Tudo bem?"

## - Repetições com teste no final (do while)
Todo comando será executado enquanto a condição for verdadeira.
```javascript
do{
	
}while(condição)
```
- **Ordem:**
1º Executa
2º Testa
3º Looping

Exemplo:
"Escreva 'Tudo bem?', enquanto a condição for verdadeira "
```javascript 
var c = 1
do{
	console.log('Tudo bem?')
	c++
}while (c <= 6)
```
Serão escritos 6 "Tudo bem?"


## - Repetições com Controle (for)
Todo comando será executado enquanto o teste for verdadeiro.
```javascript
for(inicio; teste; incr){

}
```
- **Ordem:**
1º Inicialização 
2º Teste Lógico
4º Execução do bloco
3º Incremento
5º Loop

Exemplo:
```javascript
for(var c = 1; c <= 6; c++){
	console.log('Tudo bem?')
}
```
Serão escritos 6 "Tudo bem?"


