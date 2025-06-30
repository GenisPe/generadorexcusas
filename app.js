window.onload = function() {
  let sustantivo = [
    "El gato de la vecina, ",
    "El tio que me cae mal, ",
    "Mi ex, ",
    "La lavadora de mi hermana, ",
    "Policia borracho, "
  ]
  
  let verbo = [
    "se tiro a ",
    "le pegaron ",
    "me acosa ",
    "me enmanilló "
  ]

  let cuando = [
    "mi coballa ",
    "en una fiesta ",
    "todas las noches ",
    "a la farola "
  ]

  let donde = [
    "y la mató.",
    "por imbecil.",
    "por sexo.",
    "por la noche"
  ]
  let parte1 = Math.floor(Math.random()*sustantivo.length)
  let parte2 = Math.floor(Math.random()*verbo.length)
  let parte3 = Math.floor(Math.random()*cuando.length)
  let parte4 = Math.floor(Math.random()*donde.length)
  document.querySelector("#excusas").innerHTML = sustantivo[parte1] + verbo[parte2] + cuando[parte3] + donde[parte4];
 
}
