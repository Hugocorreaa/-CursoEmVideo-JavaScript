function contar(){
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'

    } else{
        res.innerHTML = 'Contando: <br>'

        let ini = Number(inicio.value)
        let fi = Number(fim.value)
        let pass = Number(passo.value)

        if (pass <= 0){
            window.alert('Passo Inválido! Considerando PASSO 1')
            pass = 1
        }

        if (ini < fi){
            // Contagem crescente
            for(let c = ini;c <= fi; c += pass){
                res.innerHTML += `${c} \u{1F449} `
            }
        } else {
            // Contagem regressiva
            for(let c = ini; c >= fi; c -= pass){
                res.innerHTML += `${c} \u{1F449}`
            }
        }

        res.innerHTML += `\u{1F3C1}`
    }

    // while (fim < inicio){
    //     res.innerHTML = `${inicio}` 
    //     inicio = inicio + passo
    // }
}