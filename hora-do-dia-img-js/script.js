function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 22 
    msg.innerHTML = `Agora são ${hora} horas.<br>`
    if(hora >=0 && hora < 12) {
        img.src = 'IMG/manha3.png'
        document.body.style.background = '#ff9000'
        msg.innerHTML +='Bom dia!'  
        //dia
    } else if (hora >= 12 && hora < 18) {
        img.src = 'IMG/tarde.png'
        document.body.style.background = '#ff9000'
        msg.innerHTML += 'Boa tarde!'
        //tarde
    } else {
        img.src = 'IMG/noite.png'
        document.body.style.background = '#9f3e52'
        msg.innerHTML += 'Boa noite!'
        //noite
    }
}
