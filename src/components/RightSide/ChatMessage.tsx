import "./ChatMessage.css"
const ChatMessage = (props : ChatMessageProps) => {
    return(
        <h6 className="ChatMessage">{props.mensaje.hora} <i className="bi bi-1-circle"></i> Alvaro777: {props.mensaje.texto}</h6>
    )
}
export default ChatMessage

export type Message = {
    texto : string
    hora : string
}
interface ChatMessageProps {
    mensaje : Message
}