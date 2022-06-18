function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        alert("Elemento não encontrado");
    }

} //a gente tem um seletor, que vai no HTML e executar o play. Criamos uma função que reproduz sons, que estao dentro do elemento audio do HTML



const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocaSom(idAudio)
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === "space" || evento.code === "Enter") {
            tecla.classList.add('ativa'); //estou add a classe ativa no HTML
        }

        tecla.onkeyup = function () {
            tecla.classList.remove('ativa');
        }

    }
}
