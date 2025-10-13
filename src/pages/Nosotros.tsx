import { useState } from "react"
import type { Integrante } from "../components/Card"
import CardGrid from "../components/CardGrid"
import imagen_about from "../components/imagenes/imagen_about.jpg"
import "../pages/Nosotros.css"
import Redes from "../components/Redes"


const Nosotros = () => {
    

    const personas : Integrante[] = [
    {
        nombre : "Sebastian Balbuena Herrera ",
        cod : 20230286,
        foto :"https://media.licdn.com/dms/image/v2/D5603AQHsygdu-WS_Hg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726353305110?e=1762992000&v=beta&t=K6J4hmsr8KnMpVUFX0I5Hj-m4GMTu8uTS_3eqI7ioXg"

    },
    {
        nombre : "Yusef Barreto Ibrahim",
        cod : 20224518,
        foto :"https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"

    },
    {
        nombre : "Victoria Herrera Paredes",
        cod : 20225503,
        foto :"https://media.licdn.com/dms/image/v2/D5603AQFTOWJ35_itMg/profile-displayphoto-shrink_800_800/B56ZZbj7zjGQAc-/0/1745292869268?e=1762992000&v=beta&t=zEN8xQ8p-eWXFMaRPC4pIo8-KmANnxtdy0p2m-VtCoM"

    },
    {
        nombre : "Cossete Mañuico Jauregui",
        cod : 20211606,
        foto :"https://media.licdn.com/dms/image/v2/D4D03AQF8nSNL_IQbNg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713766799500?e=1762992000&v=beta&t=q3islIj0kDjVO4QnRoNMTB8zzl84uevzrze_rbbYYxo"

    },
    {
        nombre : "Alvaro Mera Incio",
        cod : 20224973,
        foto :"https://media.licdn.com/dms/image/v2/D4E03AQHZ2tt-uQDjVA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726367165738?e=1762992000&v=beta&t=64z4M5IBZ35t2-u4rTozgvLPHIGNrvh1jUoFtRZTn7M"

    },
    {
        nombre : "Melissa Ruíz Delgado",
        cod : 20232637,
        foto :"https://media.licdn.com/dms/image/v2/D4E03AQHdSzZ3tN1JKA/profile-displayphoto-shrink_800_800/B4EZZX5PerHoAc-/0/1745231346341?e=1762992000&v=beta&t=MCPOkuvNqCN6wYGRwGJMaJ4LLfCnD_IHUSa5I5DyNXc"

    },
] 

    const[Grupo1] = useState<Integrante[]>(personas)

    return <div>

        <div className="seccion px-3">
            <div className="m-5">
                
                <div className="row contenido">
                    {/* izquierda*/}
                    <div className="seccion_contenido col-md-6 mt-4 ml-5">
                        <h1 className="fw-bold">ABOUT US</h1>
                        <h3 className="mt-3 py-2">
                            Programación Web - 655
                        </h3>
                        <p className="descripcion py-3">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit sociis duis curae, felis a nec mi potenti at eros viverra cum, 
                            lectus vel cursus cras pellentesque non mus eleifend sollicitudin. Dictumst taciti non vestibulum sagittis ut donec magna nisi libero, porttitor platea netus suspendisse felis odio varius per velit, iaculis sapien sodales suscipit viverra aliquam faucibus molestie. Etiam magna ad ultricies porta dui nullam mollis malesuada aliquam maecenas, 
                            ridiculus condimentum elementum quisque auctor molestie sem nisi congue, curae augue aptent leo vestibulum praesent interdum libero arcu.
                        </p>
                    
                        <Redes/>

                    </div>
                    {/* derecha*/}
                    <div className="seccion_imagen col-md-6 mt-md-0">
                    <img src={imagen_about} className="img-fluid mt-5 d-flex py-5 w-100" alt="" />
                </div>
                </div>

               
            </div>
            
            
        </div>

        
        
        <div className="container py-3">
            <hr className="w-30 mx-auto border border-2 border-primary"/> 
            <h4 className="text-center py-3 fw-bold">Grupo 1 - Integrantes</h4>
            <CardGrid miembros={Grupo1}/>
        </div>

    </div>    
    
}

export default Nosotros