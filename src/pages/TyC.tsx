import SeccionCentral, { type Seccion } from "../components/TyC/SeccionCentral"

const TyC = () => {
  const secciones: Seccion[] = [

  {
    id: "1",
    titulo: "Aceptación de Términos de Servicio",
    contenido: "Lorem ipsum dolor sit amet consectetur adipiscing elit aptent conubia netus, inceptos ridiculus facilisi rutrum habitant ultrices sociosqu tellus luctus, convallis senectus nascetur scelerisque praesent vel nam ad cras. Augue tempor litora aenean pulvinar aptent non sed massa ac vulputate nisl, cursus",
  },
  {
    id: "2",
    titulo: "Restricción de Edad",
    contenido: "Lorem ipsum dolor sit amet consectetur adipiscing elit aptent conubia netus, inceptos ridiculus facilisi rutrum habitant ultrices sociosqu tellus luctus, convallis senectus nascetur scelerisque praesent vel nam ad cras. Augue tempor litora aenean pulvinar aptent non sed massa ac vulputate nisl, cursus",
  },
  {
    id: "3",
    titulo: "Modificaciones de los Términos",
    contenido: "Lorem ipsum dolor sit amet consectetur adipiscing elit aptent conubia netus, inceptos ridiculus facilisi rutrum habitant ultrices sociosqu tellus luctus, convallis senectus nascetur scelerisque praesent vel nam ad cras. Augue tempor litora aenean pulvinar aptent non sed massa ac vulputate nisl, cursus",
  },
  {
    id: "4",
    titulo: "Registro y Cuentas",
    contenido: "Lorem ipsum dolor sit amet consectetur adipiscing elit aptent conubia netus, inceptos ridiculus facilisi rutrum habitant ultrices sociosqu tellus luctus, convallis senectus nascetur scelerisque praesent vel nam ad cras. Augue tempor litora aenean pulvinar aptent non sed massa ac vulputate nisl, cursus",
  },
  {
    id: "5",
    titulo: "Privacidad y Protección de Datos",
    contenido: "Lorem ipsum dolor sit amet consectetur adipiscing elit aptent conubia netus, inceptos ridiculus facilisi rutrum habitant ultrices sociosqu tellus luctus, convallis senectus nascetur scelerisque praesent vel nam ad cras. Augue tempor litora aenean pulvinar aptent non sed massa ac vulputate nisl, cursus",
  },
  {
    id: "6",
    titulo: "Contenido de Usuario",
    contenido: "Lorem ipsum dolor sit amet consectetur adipiscing elit aptent conubia netus, inceptos ridiculus facilisi rutrum habitant ultrices sociosqu tellus luctus, convallis senectus nascetur scelerisque praesent vel nam ad cras. Augue tempor litora aenean pulvinar aptent non sed massa ac vulputate nisl, cursus",
  },
  {
    id: "7",
    titulo: "Conducta Prohibida",
    contenido: "Lorem ipsum dolor sit amet consectetur adipiscing elit aptent conubia netus, inceptos ridiculus facilisi rutrum habitant ultrices sociosqu tellus luctus, convallis senectus nascetur scelerisque praesent vel nam ad cras. Augue tempor litora aenean pulvinar aptent non sed massa ac vulputate nisl, cursus",
  },
  {
    id: "8",
    titulo: "Información de Contacto",
    contenido: "Lorem ipsum dolor sit amet consectetur adipiscing elit aptent conubia netus, inceptos ridiculus facilisi rutrum habitant ultrices sociosqu tellus luctus, convallis senectus nascetur scelerisque praesent vel nam ad cras. Augue tempor litora aenean pulvinar aptent non sed massa ac vulputate nisl, cursus",
  }

]


    return <div>
      <div className="container">
        <p className="fst-italic mt-5">Ultima actualización: Octubre de 2025</p>
        <h1 className="fw-bold">Términos y Condiciones</h1>
        <hr className="w-30 mx-auto border-2 mb-5"/>
      </div>

      <SeccionCentral sec={secciones}/>
      
    </div>
}

export default TyC

