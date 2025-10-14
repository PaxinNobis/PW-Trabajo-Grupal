import { useState } from "react"
import type { Message } from "./ChatMessage"
import "./ChatBar.css"
interface ChatBarProps {
    mensajes : Message[]
    setMensajes : (newmensajes : Message[]) => void
}
const ChatBar = (props : ChatBarProps) => {
    const [TextChat, SetTextChat] = useState<string>("")
    const TextChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        return (
            SetTextChat(e.currentTarget.value)
        )
    }
    const TextEnter = (texto : string) => {
        const ahora = new Date();
        const horas = ahora.getHours();
        const minutos = ahora.getMinutes();
        const horafinal = `${horas}:${minutos}`
        props.setMensajes([...props.mensajes, {texto : texto, hora : horafinal}])
    }
    return(
        <div className="ChatBar">
            <input className = "ChatInput" value = {TextChat} onChange = {TextChange} type="text" placeholder="Send a message"/>
            <button className = "ChatButton" onClick={() => (TextEnter(TextChat))}>Chat</button>
        </div>
    )
}
export default ChatBar;