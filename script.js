var c = document.getElementById("house");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(140,200);
  ctx.lineTo(260,200);
  ctx.lineTo(200,340);
  ctx.lineTo(140,200);
  ctx.closePath();
  ctx.fillStyle = "#cd8b2c"; // Définition de la couleur de remplissage
  ctx.fill();//remplissage de la couleur
  ctx.beginPath();
  ctx.fillStyle="#8a0908";
  ctx.moveTo(140,200);//point de départ(x, y)
  ctx.quadraticCurveTo(200,0,260,200);/*(point x de la courbe, point y de la courbe,
   point d'arrivée x, point d'arrivée y)*/
  ctx.fill();
