import type { Integrante } from "./Card"
import Card from "./Card"

const CardGrid = (props: CardGridProps) => {

    return <div className="container">
        <div className="row">
        {
            props.miembros.map((integrante: Integrante) => {
                return <div className="col-md-4 mt-4 d-flex">
                    <div>
                        <Card persona={integrante}/>
                    </div>
                </div>
            })
        }
    </div>
    </div>

    

}

interface CardGridProps {
    miembros: Integrante[]
}

export default CardGrid