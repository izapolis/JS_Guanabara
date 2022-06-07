function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = window.document.getElementById("txtano");
  var res = document.querySelector('div#res');
  if (fano.value.length == 0 || Number(fano.value.length) > ano) {
    window.alert("Verifique os dados e tente novamente!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = '';
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');
    if (fsex[0].checked) {
      genero = "masculino"
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'bebe.jpg');
      } else if (idade < 21) {
        img.setAttribute('src', 'jovem.jpg');
      } else if (idade < 70) {
        img.setAttribute('src', 'adulto.jpg');
      } else if (idade >= 70) {
        img.setAttribute('src', 'idoso.jpg');
      }
    } else if (fsex[1].checked) {
      genero = "feminino"
      if (idade >= 0 && idade < 10) {
        img.setAttribute('src', 'bebe.jpg');
      } else if (idade < 21) {
        img.setAttribute('src', 'jovem.jpg');
      } else if (idade < 70) {
        img.setAttribute('src', 'adulto.jpg');
      } else if (idade >= 70) {
        img.setAttribute('src', 'idoso.jpg');
      }

    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero}, com idade calculada: ${idade}`
    res.appendChild(img)
  }

}