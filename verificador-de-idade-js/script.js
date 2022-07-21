function verificar() {
    var data = new Date()
    var atual = data.getFullYear()
    var nasci = document.getElementById('anon')
    var res = document.getElementById('res')
    if(nasci.value.length == 0 || Number(nasci.value) > atual){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sex = document.getElementsByName('radsex')
        var gênero = ''
        var idade = atual - Number(nasci.value)
        var img = document.createElement('img')
        img.setAttribute('src','foto')
        if(sex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade <= 10) {
                //criança
                img.setAttribute('src','IMG/criançah.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src','IMG/jovemh.png')
            } else if(idade < 51){
                //adulto
                img.setAttribute('src', 'IMG/adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'IMG/idoso.png')
            }

        } else {
            gênero = ' Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'IMG/criançam.png')
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'IMG/jovemm.png')
            } else if(idade < 51) {
                //adulto
                img.setAttribute('src', 'IMG/adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'IMG/idosa.png')
            }
        }
    }  
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
}