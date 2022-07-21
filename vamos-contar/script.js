function contar(){
    var msg = document.getElementById('msg')
    var ini = document.getElementById('ini')
    var pas = document.getElementById('pas')
    var fim = document.getElementById('fim')
    if(ini.value.length == 0 || fim.value.length == 0){
        window.alert(`[ERRO] Verifique se os valores foram adicionados e tente novamente`)
        msg.innerHTML = 'Impossível contar!'
    } else {
        msg.innerHTML = `Contado: <br>`
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if(p <= 0) {
            window.alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }
        if(i > f){
            for(var c = i;c >= f;c -=p) {
                msg.innerHTML += `${c} \u{1f449}`
            }
        } else {
            for(var c = i;c <= f;c += p)
                msg.innerHTML += `${c} \u{1f449}`
        }
        msg.innerHTML += `\u{1f3c1}`
    }
}