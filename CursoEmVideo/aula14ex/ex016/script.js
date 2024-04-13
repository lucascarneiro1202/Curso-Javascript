let start = document.getElementById('start')
let end = document.getElementById('end')
let jump = document.getElementById('jump')
let result = document.getElementById('result')

function contar(){
    let startN = parseInt(start.value)
    let endN = parseInt(end.value)
    let jumpN = parseInt(jump.value)

    if(start.value.length == 0 || end.value.length == 0 || jump.value.length == 0){
        // window.alert('Dados insuficientes!')
        result.innerHTML = 'Impossível contar!'
    } else {
        result.innerText = 'Contando: '

        if(jumpN <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            jumpN = 1
        }

        if(startN < endN){
            // Contagem crescente

            while(startN <= endN) {
                result.innerHTML += `${startN} \u{1F449}`
                startN += jumpN
            }
        } else {
            // Contagem regressiva

            while(startN >= endN) {
                result.innerHTML += `${startN} \u{1F449}`
                startN -= jumpN
            }
        }

        result.innerHTML += `\u{1F3C1}`
    }
}



// unicode emoji list
