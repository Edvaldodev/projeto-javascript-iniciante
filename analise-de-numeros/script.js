let num = document.querySelector('input#numtxt')
let lista = document.querySelector('select#seltab')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true 
    } else {
        return false
    }
}



function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor invalido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()

} 

function finalizar() {
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor) 
                menor = valores[pos]
        }

        media = soma / tot 
        res.innerHTML = `<P>Ao todo, temos ${tot} números cadastrados.</P>`
        res.innerHTML += `<p>O maior valor indormado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A media dos valores são ${media}</p>`
    }
}

