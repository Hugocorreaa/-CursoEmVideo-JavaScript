let numero = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')

let vetor = []

// ========== VERIFICA SE O NÚMERO ESTÁ ENTRE 1 E 100 ==============
function isNumero(x){
    if(Number(x) >= 1 && Number(x) <= 100){
        return true
    } else {
        return false
    }

}

// ==================== VERIFICA SE O NÚMERO JÁ EXISTE NO ARRAY =============
function inLista(x, l){
    if(l.indexOf(Number(x)) != -1){
        return true 
    } else {
        return false
    }

}


// =================== SE isNumero e inLista, ELE ADICIONA NO VETOR =====================
function adicionar(){
    if (isNumero(numero.value) && !inLista(numero.value, vetor)){
        vetor.push(Number(numero.value))
        
        let item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    numero.value = ''
    numero.focus()

}


// ============== FINALIZAR =============

function finalizar(){
    if (vetor.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let total = vetor.length

        let maior = vetor[0]
        let menor = vetor [0]
        let soma = 0
        let media = 0
        for(let pos in vetor){
            soma += vetor[pos]

            if (vetor [pos] > maior){
                maior = vetor[pos]
            }
                
            if (vetor[pos] < menor){
                menor = vetor[pos]
            }
                
        }
        media = soma/total 

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
        
    }
}