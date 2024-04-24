import React from 'react';
import { Link } from 'react-router-dom';
import editIcon from '../assets/edicon.png'
import delIcon from '../assets/delicon.png'
import { Menu } from '../components/Menu';

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://images.unsplash.com/photo-1521220546621-cf34a1165c67?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <div className="user">
        <img src="https://plus.unsplash.com/premium_photo-1681488109800-bad7e69c66a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMGNoYXJhY3RlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
      <div className="info">
        <span>Anna</span>
        <p>Posted 2 days ago</p>
      </div>
      <div className="edit">
        <Link to={`/write?edit=3`} >
          <img src={editIcon} alt="" />
        </Link>
        <img src={delIcon} alt="" />
      </div>
      </div>
      <h1>Lorem ipsum Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</h1>
      <p>Lorem Ipsum es simplemente el texto de relleno de 
        las imprentas y archivos de texto. Lorem Ipsum ha sido
         el texto de relleno estándar de las industrias desde
          el año 1500, cuando un impresor (N. del T. persona 
          que se dedica a la imprenta) desconocido usó una ga
          lería de textos y los mezcló de tal manera que logr
          ó hacer un libro de textos especimen. No sólo sobrev
          ivió 500 años, sino que tambien ingresó como texto 
          de relleno en documentos electrónicos, quedando ese
          ncialmente igual al original. Fue popularizado en 
          los 60s con la creación de las hojas "Letraset", l
          as cuales contenian pasajes de Lorem Ipsum, y más r
          ecientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
        Es un hecho establecido hace demasiado tiempo
         que un lector se distraerá con el contenido del t
         exto de un sitio mientras que mira su diseño. El punto 
         de usar Lorem Ipsum es que tiene una distribución más o 
         menos normal de las letras, al contrario de usar textos 
         como por ejemplo "Contenido aquí, contenido aquí". Estos
          textos hacen parecerlo un español que se puede leer. 
          Muchos paquetes de autoedición y editores de páginas 
          web usan el Lorem Ipsum como su texto por defecto, y 
          al hacer una búsqueda de "Lorem Ipsum" va a dar por 
          resultado muchos sitios web que usan este texto si se 
          encuentran en estado de desarrollo. Muchas versiones h
          an evolucionado a través de los años, algunas veces po
          r accidente, otras veces a propósito (por ejemplo inse
          rtándole humor y cosas por el estilo).
      </p>
      </div>
      <Menu/>
    </div>
  );
}

export default Single;
