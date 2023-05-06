import React from 'react'
import Laura from '../../assets/img/Laura.jpg';
import Rebecca from '../../assets/img/Rebecca.jpg';
import owner from '../../assets/img/owner.jpg';
import zapato2 from '../../assets/img/zapato2.jpg';
import zapato3 from '../../assets/img/zapato3.jpg';
import zapato from '../../assets/img/habemus.jpg';
import { Link } from 'react-router-dom';
import '../../assets/css/animaciones.css'
import LoadingSpinner from '../../components/LoadingSpinner';

function Acerca() {
    document.title = 'DanShoes! Acerca de Nosotras';
    if(zapato === undefined){
        return <section id="zapatos" className="py-5 text-center container">
        <div className="album bg-degrade py-5">
        <div className="container">
          <div className="">
          <LoadingSpinner />
          </div></div></div>
      </section>
    }
    return (
        <div className="slide-in-fwd-center">
        <div className="container marketing">
          <div className="row mx-auto align-middle text-center py-4">
            <div className="col-lg-4 mx-auto">
              <img src={Laura.jpg} className="img-fluid mx-auto" alt="DiseñadoradeDanShoes" />
              <h2>Nuestra diseñadora <p>Laura Rodriguez</p></h2>
              <p>Nuestro diseñadora Laura Rodriguez estudió en francia para luego regresar a nuestras tierras y encontrarse con "la dueña" y fundar Dan Shoes!</p>
              <p><Link to="" className="btn btn-secondary">Más info »</Link></p>
            </div>
            <div className="col-lg-4 mx-auto">
              <img src={Rebecca.jpg} className="img-fluid mx-auto" alt="DiseñadoradeDanShoes" />
              <h2>Nuestro otra diseñadora <p>Rebecca Smith</p></h2>
              <p>Rebecca Smith, nuestra otra diseñadora estrella, recibida de la mejor universidad de Estados Unidos, viajó para visitar nuestro país y se quedó a vivir.</p>
              <p><Link to="" className="btn btn-secondary">Más info »</Link></p>
            </div>
            <div className="col-lg-4">
              <img src={owner} className="img-fluid mx-auto" alt="dueñadeDanShoesNancyVelez" />
              <h2>La jefa <p>Nancy Velez</p></h2>
              <p>Nancy es la dueña de Dan Shoes! y con todos sus ahorros se compró un local hace varios años y llamó a Laura y Rebecca para fundar Dan Shoes!</p>
              <p><Link to="" className="btn btn-secondary">Más info »</Link></p>
            </div>
          </div>
          {/* Nuestra ética */}
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">Dan Shoes! <span className="text-muted"><p>From zero to hero.</p></span></h2>
              <p className="lead">Desde nuestros humildes inicios hasta convertirnos en una de las marcas más renocidas del paìs, una historia de superación, esfuerzo y esperanza, donde la visión de "La dueña" nos llevó a la excelencia en diseños de zapatos.</p>
            </div>
            <div className="col-md-5">
              <img src={zapato2.jpg} className="img-fluid mx-auto" alt="diseños" />
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">Nuestra pasión es diseñar. <span className="text-muted"><p>Y se nota en los zapatos.</p></span></h2>
              <p className="lead">Todos nuestros zapatos están echos con pasión y cariño, siempre estamos aprendiendo para superarnos y estar a la altura de lo que esta a la moda.</p>
            </div>
            <div className="col-md-5 order-md-1">
              <img src={zapato3.jpg} className="img-fluid mx-auto" alt="cheffdehabemuspapavictorvondoomcocinando" />
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">Dan Shoes! <span className="text-muted"><p>Nuestro sueño</p></span></h2>
              <p className="lead">Estamos continuamente pensando nuevos retos y nuevas metas, nuestro sueño nos llevará a donde tengamos que ir para seguir creciendo como personas y como profesionales, los zapatos nos inspiraron y la gente nos sigue llevando a nuevas alturas, ya tenemos proyectado abrir 6 nuevos locales para llevar nuestro arte y trabajo a nuevas tierras.</p>
            </div>
            <div className="col-md-5">
              <img src={zapato} className="img-fluid mx-auto" alt="zapato" />
            </div>
          </div>
          <hr className="featurette-divider" />
          {/* fin de nuestra ética */}
        </div>
      </div>
  )
}

export default Acerca