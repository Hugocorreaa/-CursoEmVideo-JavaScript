function tabuada(){
    let numero = document.getElementById('txtnumero')
    let tabuada = document.getElementById('seltab')
    
    let res = document.getElementById('res')

    var num = Number(numero.value)
    res.innerHTML = ''

    if (num == 0) {
        window.alert('Escreva um número.')
    } else {
        for(let c = 1;c <= 10; c++){
            res.innerHTML += `${num} x ${c} = ${num * c} <br>`
        }

    }

}