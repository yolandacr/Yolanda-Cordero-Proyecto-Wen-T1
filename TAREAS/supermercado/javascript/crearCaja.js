
function crearCaja(idCaja) {
  
  cajas.push(new Caja(document.getElementById("caja1")));
  cajas.push(new Caja(document.getElementById("caja2")));
  cajas.push(new Caja(document.getElementById("caja3")));
  cajas.push(new Caja(document.getElementById("caja4")));
  switch (idCaja) {
    case 1:
      cajas[0].atender();
      break;
    case 2:
      cajas[1].atender();
      break;
    case 3:
      cajas[2].atender();
      break;
    case 4:
      cajas[3].atender();
      break;
  }
}

/* function resta(){
  
} */
