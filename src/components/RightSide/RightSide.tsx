import ChatMessage from "./ChatMessage"
import ChatBar from "./ChatBar"
import PointsBar from "./PointsBar"
import type { Message } from "./ChatMessage"
import "./RightSide.css"
interface RightSideProps {
    mensajes : Message[]
    setMensajes : (newmensajes : Message[]) => void
}
const RightSide = (props: RightSideProps) => {
    return(
        <div className="RightSide">
            <div className="ChatTitle">
                <h5 className="TextBox">Stream Chat</h5>
            </div>
            <div className="RightSideScroll container-fluid">
                {
                    props.mensajes.map((mensaje : Message) => {
                        return(
                            <ChatMessage mensaje ={mensaje}></ChatMessage>
                        )
                    })
                }
            </div>
            <ChatBar mensajes={props.mensajes} setMensajes = {props.setMensajes}></ChatBar>
            <PointsBar></PointsBar>
        </div>
    )
}
export default RightSide