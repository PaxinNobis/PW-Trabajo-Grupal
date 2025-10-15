import LeftSide from "../components/LeftSide/LeftSide"
import RightSide from "../components/RightSide/RightSide"
import MiddleSide from "../components/MiddleSide/MiddleSide"

import type { Stream } from "../components/LeftSide/StreamBox"
import type { Message } from "../components/RightSide/ChatMessage"
import "./Pages.css"
import { useState } from "react"
const Streaming = () => {
    const [mensajes, SetMensajes] = useState<Message[]>([])
    const streams: Stream[] = [
        {
            streamer: {
                nickname: "ElRichMC",
                photo: "https://yt3.googleusercontent.com/ytc/AIdro_lTzHSJYR8J23ApXpLf7Twi-9JB1tDiO2RsSrm3LZdX5b4=s900-c-k-c0x00ffffff-no-rj",
                onLine: true,
            },
            game: {
                name: "Minecraft",
                photo: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-272x380.jpg",
                tags: [
                    {
                        name: "Simulación"
                    }
                ],
            },
            viewers: 13600,
        }, {
            streamer: {
                nickname: "ElRichMC",
                photo: "https://yt3.googleusercontent.com/ytc/AIdro_lTzHSJYR8J23ApXpLf7Twi-9JB1tDiO2RsSrm3LZdX5b4=s900-c-k-c0x00ffffff-no-rj",
                onLine: true,
            },
            game: {
                name: "Minecraft",
                photo: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-272x380.jpg",
                tags: [
                    {
                        name: "Simulación"
                    }
                ],
            },
            viewers: 10450,
        }, {
            streamer: {
                nickname: "ElRichMC",
                photo: "https://yt3.googleusercontent.com/ytc/AIdro_lTzHSJYR8J23ApXpLf7Twi-9JB1tDiO2RsSrm3LZdX5b4=s900-c-k-c0x00ffffff-no-rj",
                onLine: true,
            },
            game: {
                name: "Minecraft",
                photo: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-272x380.jpg",
                tags: [
                    {
                        name: "Simulación"
                    }
                ],
            },
            viewers: 10450,
        }, {
            streamer: {
                nickname: "ElRichMC",
                photo: "https://yt3.googleusercontent.com/ytc/AIdro_lTzHSJYR8J23ApXpLf7Twi-9JB1tDiO2RsSrm3LZdX5b4=s900-c-k-c0x00ffffff-no-rj",
                onLine: true,
            },
            game: {
                name: "Minecraft",
                photo: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-272x380.jpg",
                tags: [
                    {
                        name: "Simulación"
                    }
                ],
            },
            viewers: 10450,
        }, {
            streamer: {
                nickname: "ElRichMC",
                photo: "https://yt3.googleusercontent.com/ytc/AIdro_lTzHSJYR8J23ApXpLf7Twi-9JB1tDiO2RsSrm3LZdX5b4=s900-c-k-c0x00ffffff-no-rj",
                onLine: true,
            },
            game: {
                name: "Minecraft",
                photo: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-272x380.jpg",
                tags: [
                    {
                        name: "Simulación"
                    }
                ],
            },
            viewers: 10450,
        }, {
            streamer: {
                nickname: "ElRichMC",
                photo: "https://yt3.googleusercontent.com/ytc/AIdro_lTzHSJYR8J23ApXpLf7Twi-9JB1tDiO2RsSrm3LZdX5b4=s900-c-k-c0x00ffffff-no-rj",
                onLine: true,
            },
            game: {
                name: "Minecraft",
                photo: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-272x380.jpg",
                tags: [
                    {
                        name: "Simulación"
                    }
                ],
            },
            viewers: 10450,
        }, {
            streamer: {
                nickname: "ElRichMC",
                photo: "https://yt3.googleusercontent.com/ytc/AIdro_lTzHSJYR8J23ApXpLf7Twi-9JB1tDiO2RsSrm3LZdX5b4=s900-c-k-c0x00ffffff-no-rj",
                onLine: true,
            },
            game: {
                name: "Minecraft",
                photo: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-272x380.jpg",
                tags: [
                    {
                        name: "Simulación"
                    }
                ],
            },
            viewers: 10450,
        }, {
            streamer: {
                nickname: "ElRichMC",
                photo: "https://yt3.googleusercontent.com/ytc/AIdro_lTzHSJYR8J23ApXpLf7Twi-9JB1tDiO2RsSrm3LZdX5b4=s900-c-k-c0x00ffffff-no-rj",
                onLine: true,
            },
            game: {
                name: "Minecraft",
                photo: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-272x380.jpg",
                tags: [
                    {
                        name: "Simulación"
                    }
                ],
            },
            viewers: 10450,
        }, {
            streamer: {
                nickname: "ElRichMC",
                photo: "https://yt3.googleusercontent.com/ytc/AIdro_lTzHSJYR8J23ApXpLf7Twi-9JB1tDiO2RsSrm3LZdX5b4=s900-c-k-c0x00ffffff-no-rj",
                onLine: true,
            },
            game: {
                name: "Minecraft",
                photo: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-272x380.jpg",
                tags: [
                    {
                        name: "Simulación"
                    }
                ],
            },
            viewers: 10450,
        }, {
            streamer: {
                nickname: "ElRichMC",
                photo: "https://yt3.googleusercontent.com/ytc/AIdro_lTzHSJYR8J23ApXpLf7Twi-9JB1tDiO2RsSrm3LZdX5b4=s900-c-k-c0x00ffffff-no-rj",
                onLine: true,
            },
            game: {
                name: "Minecraft",
                photo: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-272x380.jpg",
                tags: [
                    {
                        name: "Simulación"
                    }
                ],
            },
            viewers: 10450,
        }, {
            streamer: {
                nickname: "ElRichMC",
                photo: "https://yt3.googleusercontent.com/ytc/AIdro_lTzHSJYR8J23ApXpLf7Twi-9JB1tDiO2RsSrm3LZdX5b4=s900-c-k-c0x00ffffff-no-rj",
                onLine: true,
            },
            game: {
                name: "Minecraft",
                photo: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-272x380.jpg",
                tags: [
                    {
                        name: "Simulación"
                    }
                ],
            },
            viewers: 10450,
        }, {
            streamer: {
                nickname: "ElRichMC",
                photo: "https://yt3.googleusercontent.com/ytc/AIdro_lTzHSJYR8J23ApXpLf7Twi-9JB1tDiO2RsSrm3LZdX5b4=s900-c-k-c0x00ffffff-no-rj",
                onLine: true,
            },
            game: {
                name: "Minecraft",
                photo: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-272x380.jpg",
                tags: [
                    {
                        name: "Simulación"
                    }
                ],
            },
            viewers: 10450,
        }, {
            streamer: {
                nickname: "ElRichMC",
                photo: "https://yt3.googleusercontent.com/ytc/AIdro_lTzHSJYR8J23ApXpLf7Twi-9JB1tDiO2RsSrm3LZdX5b4=s900-c-k-c0x00ffffff-no-rj",
                onLine: true,
            },
            game: {
                name: "Minecraft",
                photo: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-272x380.jpg",
                tags: [
                    {
                        name: "Simulación"
                    }
                ],
            },
            viewers: 10450,
        }, {
            streamer: {
                nickname: "ElRichMC",
                photo: "https://yt3.googleusercontent.com/ytc/AIdro_lTzHSJYR8J23ApXpLf7Twi-9JB1tDiO2RsSrm3LZdX5b4=s900-c-k-c0x00ffffff-no-rj",
                onLine: true,
            },
            game: {
                name: "Minecraft",
                photo: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-272x380.jpg",
                tags: [
                    {
                        name: "Simulación"
                    }
                ],
            },
            viewers: 10450,
        }, {
            streamer: {
                nickname: "ElRichMC",
                photo: "https://yt3.googleusercontent.com/ytc/AIdro_lTzHSJYR8J23ApXpLf7Twi-9JB1tDiO2RsSrm3LZdX5b4=s900-c-k-c0x00ffffff-no-rj",
                onLine: true,
            },
            game: {
                name: "Minecraft",
                photo: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-272x380.jpg",
                tags: [
                    {
                        name: "Simulación"
                    }
                ],
            },
            viewers: 10450,
        }, {
            streamer: {
                nickname: "ElRichMC",
                photo: "https://yt3.googleusercontent.com/ytc/AIdro_lTzHSJYR8J23ApXpLf7Twi-9JB1tDiO2RsSrm3LZdX5b4=s900-c-k-c0x00ffffff-no-rj",
                onLine: true,
            },
            game: {
                name: "Minecraft",
                photo: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-272x380.jpg",
                tags: [
                    {
                        name: "Simulación"
                    }
                ],
            },
            viewers: 10450,
        }, {
            streamer: {
                nickname: "ElRichMC",
                photo: "https://yt3.googleusercontent.com/ytc/AIdro_lTzHSJYR8J23ApXpLf7Twi-9JB1tDiO2RsSrm3LZdX5b4=s900-c-k-c0x00ffffff-no-rj",
                onLine: true,
            },
            game: {
                name: "Minecraft",
                photo: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-272x380.jpg",
                tags: [
                    {
                        name: "Simulación"
                    }
                ],
            },
            viewers: 10450,
        }, {
            streamer: {
                nickname: "ElRichMC",
                photo: "https://yt3.googleusercontent.com/ytc/AIdro_lTzHSJYR8J23ApXpLf7Twi-9JB1tDiO2RsSrm3LZdX5b4=s900-c-k-c0x00ffffff-no-rj",
                onLine: true,
            },
            game: {
                name: "Minecraft",
                photo: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-272x380.jpg",
                tags: [
                    {
                        name: "Simulación"
                    }
                ],
            },
            viewers: 10450,
        }, {
            streamer: {
                nickname: "ElRichMC",
                photo: "https://yt3.googleusercontent.com/ytc/AIdro_lTzHSJYR8J23ApXpLf7Twi-9JB1tDiO2RsSrm3LZdX5b4=s900-c-k-c0x00ffffff-no-rj",
                onLine: true,
            },
            game: {
                name: "Minecraft",
                photo: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-272x380.jpg",
                tags: [
                    {
                        name: "Simulación"
                    }
                ],
            },
            viewers: 10450,
        },
    ]
    return (
        <div className="container-fluid Page">
            <div className="row Main-Seccion">
                <div className="col-2" id="Left-Page">
                    <LeftSide streams={streams}></LeftSide>
                </div>
                <div className="col-7" id="Middle-Page">
                    <MiddleSide stream={streams[0]}></MiddleSide>
                </div>
                <div className="col-3" id="Right-Page">
                    <RightSide mensajes={mensajes} setMensajes={SetMensajes}></RightSide>
                </div>
            </div>
        </div>
    )
}

export default Streaming
