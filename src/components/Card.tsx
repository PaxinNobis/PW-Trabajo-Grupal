import "./Card.css"

const Card = (props: CardProps) => {
    return <div className="card stream-card">
              <img src={props.persona.foto} className="card-img-top"/>
            <div className="card-body">
                    <h5 className="card-title">{props.persona.nombre}</h5>
                    <p className="card-text">Código: {props.persona.cod}</p>
               </div>
          </div>

    }
    
 

export type Integrante = {
  nombre: string;
  cod: number;
  foto: string
}

interface CardProps {
  persona: Integrante
}

export default Card