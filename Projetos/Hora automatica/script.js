function carregar (){

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${minuto} minutos.`

    if (hora >= 0 && hora < 12){
        //BOM DIA!
        img.src='imagens/manha.png'
        document.body.style.background = '#C5C4C0'
    } else if (hora >= 12 && hora < 18){
        // BOA TARDE!
        img.src="imagens/tarde.png"
        document.body.style.background = '#FDBE8B'
    } else{
        //BOA NOITE!
        img.src="imagens/noite.png"
        document.body.style.background = '#3E2423'
    }

}


