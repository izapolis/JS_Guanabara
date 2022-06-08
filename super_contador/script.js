alert("Olá")

function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pas = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 00 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = "Impossível contar!"
        window.alert("[ERRO] Faltam dados!")
    } else {
        res.innerHTML = "Contando......<br>"
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(pas.value);
        if (p <= 0) {
            window.alert("Passo inválido! Considerando como Passo = 1, segue contagem")
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
    }
    res.innerHTML+=`\u{1F3C1}`
}
