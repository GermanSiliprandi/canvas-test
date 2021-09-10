function dibujar_linea(color, xinitial, yinitial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinitial, yinitial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function drawing_1(color_1) {
  color_1="red"
  lines=parseInt(text_JS.value);

  for (l = 0; l <lines ; l += 1) {
    dibujar_linea(color_1, 0, 300/lines * l, 300/lines * (l + 1), 300);

  }
}

var button_JS = document.getElementById("button_HTML");
button_JS.addEventListener("click", drawing_1);
var text_JS = document.getElementById("text_HTML");

var d =document.getElementById("dibujito");
var lienzo = d.getContext("2d");

