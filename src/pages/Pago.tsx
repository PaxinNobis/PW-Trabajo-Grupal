import { useState } from "react";

const Pago = () => {

    const metodosPago = [
        { id: "tarjeta", nombre: "Tarjeta de crédito / débito", icono: "💳" },
        { id: "qr", nombre: "Pago con QR", icono: "📱" }
    ]

    const [metodoSeleccionado, setMetodoSeleccionado] = useState<string>("");

  const handleSeleccion = (id: string) => {
    setMetodoSeleccionado(id);
  }
    
    return <div className="container px-5 mt-5 mb-5 border">

      <div className="container py-5">
        <h2 className="fw-bold mb-4">Resumen del pedido</h2>
        <h5>*Tu información se mantendrá confidencial.📎</h5>
        <p className="text-muted mb-5">
           Elige el método de pago para completar la compra de tus <strong>Stars</strong>.
        </p>

        <hr className="w-30 mx-auto border-2 mb-4"/>
        <div className="row">
            <div className="col-md-6">
                <h5>Cuenta</h5>
            </div>
            <div className="col-md-6 text-sm-end">
                <h5>{"foto_usuario"} {"Usuario"}</h5>
            </div>
        </div>

        <hr className="w-30 mx-auto border-2 mb-4"/>
        
        <div className="row">
        <div className="col-md-6">
                <h5>Total</h5>
                <p>Starter Pack</p>
            </div>
            <div className="col-md-6 text-sm-end">
                <h5>PEN1.50</h5>
                <p>1.50</p>
            </div>
        </div>

        <hr className="w-30 mx-auto border-2 mb-4"/>

        <h5>Método de Pago</h5>


        <div className="justify-content-center container">
          {metodosPago.map((metodo) => (
            <div key={metodo.id} className="mb-4">
                
              <button
                className={`card w-30 p-4 text-center ${
                  metodoSeleccionado === metodo.id ? "border-primary shadow-lg" : "border-light"
                }`}
                onClick={() => handleSeleccion(metodo.id)}
              >
                <h1>{metodo.icono}</h1>
                <h5 className="fw-bold">{metodo.nombre}</h5>
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <button
            className="btn btn-success btn-lg px-5"
            disabled={!metodoSeleccionado}
          >
            Continuar
          </button>
        </div>
      </div>
    </div>



}


export default Pago