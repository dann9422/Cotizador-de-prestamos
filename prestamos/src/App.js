import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/formulario";
import Mensaje from "./components/Mensaje";
import Resultado from "./components/Resultado";
import Spinner from "./components/spinner";
function App() {
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState("");
  const [total, guardarTotal] = useState(0);
  const [cargando, cargandoSpinner] = useState(false);
  let componente;

  if (cargando) {
    componente = <Spinner />;
  } else if (total === 0) {
    componente = <Mensaje />;
  } else {
    componente = <Resultado total={total} plazo={plazo} cantidad={cantidad} />;
  }

  return (
    <Fragment>
      <Header titulo="cotizador de Prestamos" />
      <div className="container">
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          total={total}
          guardarTotal={guardarTotal}
          cargandoSpinner={cargandoSpinner}
        />
        <div className="mensajes">{componente}</div>
      </div>
    </Fragment>
  );
}

export default App;
