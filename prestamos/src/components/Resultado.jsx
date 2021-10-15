import React from "react";
const Resultado = ({ cantidad, total, plazo }) => (
  <div className="u-full-width resulado">
    <h2>Resumen</h2>
    <p>Cantidad solicitada es: ${cantidad}</p>
    <p>A pagar en {plazo} Meses</p>
    <p>Su pago mensaual es de: {(total / plazo).toFixed(2)}</p>
    <p>Total a pagar es de: ${total.toFixed(2)}</p>
  </div>
);

export default Resultado;
