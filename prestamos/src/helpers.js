export function calcularTotal(cantidad, plazo) {
  // cantidades
  //0-1000 =25%
  //1000-5000=20%
  //5001-10000=15%
  //+10000 =10%

  let totalCantidades;
  if (cantidad <= 1000) {
    totalCantidades = cantidad * 0.25;
  } else if (cantidad > 1000 && cantidad <= 5000) {
    totalCantidades = cantidad * 0.2;
  } else if (cantidad > 5000 && cantidad <= 10000) {
    totalCantidades = cantidad * 0.15;
  } else {
    totalCantidades = cantidad * 0.1;
  }
  console.log(totalCantidades);

  // plazos
  //3=5%
  //6=10%
  //12=15%
  //24=20%

  let totalPlazos = 0;

  switch (plazo) {
    case 3:
      totalPlazos = cantidad * 0.05;
      break;

    case 6:
      totalPlazos = cantidad * 0.1;
      break;

    case 12:
      totalPlazos = cantidad * 0.15;
      break;

    case 24:
      totalPlazos = cantidad * 0.2;
      break;
    default:
      break;
  }
  return totalPlazos + totalCantidades + cantidad;
}
