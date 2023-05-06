import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import zapato from '../../assets/img/zapato.jpg';
import zapato2 from '../../assets/img/zapato2.jpg';
import zapato3 from '../../assets/img/zapato3.jpg';
import './Inicio.css'
import '../../assets/css/animaciones.css'
import LoadingSpinner from '../../components/LoadingSpinner/';


function Inicio() {
  
  document.title = 'Dan Shoes! Inicio';


  if(zapato3 === undefined){
    return <section id="zapatos" className="py-5 text-center container">
    <div className="album bg-degrade py-5">
    <div className="container">
      <div className="">
      <LoadingSpinner />
      </div></div></div>
  </section>
  }
  return (
<div>
  <section className="heroportada position-relative pt-48 pb-40 bg-dark bg-cover bg-size--cover slide-in-fwd-center">
    {/* Overlay */}
    <span className="position-absolute top-0 start-0 w-full h-full bg-dark opacity-80" />
    {/* Contenido */}
    <div className="container-lg max-w-screen-xl position-relative overlap-10 text-center text-lg-start pt-5 pb-5 pt-lg-6">
      <div className="row row-grid align-items-center">
        <div className="col-lg-8 text-center text-lg-start">
          {/* Título */}
          <h1 className="ls-tight font-bolder display-5 text-white mb-5">
            ¡Somos una de las marcas mas conocidas del paìs!
          </h1>
          {/* Texto */}
          <p className="lead text-white text-opacity-80 mb-10 w-lg-2/3">
            Tenemos las mejores materias primas y expertas diseñadores para que puedas estar a la moda.
            {/* Botones */}
          </p><div className="mt-10 mx-n2">
            <Link to="/" className="btn btn-lg btn-primary shadow-sm mx-2 px-lg-8">
              ¡Comprar Online!
            </Link>
            <Link to="" className="btn btn-lg btn-primary bg-success py-2 mx-2 px-lg-8">
              Promociones
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
      <div className="pricing-header p-3 py-2 pb-md-4 mx-auto text-center">
      <h1 className="display-4 fw-normal">¡2x1!</h1>
      <p className="fs-5">Aprovechá nuestro 2x1 y llevate 1 par gratis.</p>
    </div>
    <div className="px-5 py-2 text-center">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header text-white bg-success py-3">
              <h4 className="my-0 fw-normal">Zapatos american</h4>
            </div>
            <div className="card-body bg-warning">
              <img src={zapato} alt="comboamericanaconfritas" width="90%" className="img-fluid" />
              <h1 className="card-title pricing-card-title mt-3 text-white">$3600</h1>
              <button type="button" className="w-100 btn btn-lg btn-primary">¡Comprar online!</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3 bg-success text-white">
              <h4 className="my-0 fw-normal">Esparta</h4>
            </div>
            <div className="card-body bg-warning">
              <img src={zapato2} width="90%" alt="comboamericanaconfritas" className="img-fluid" />
              <h1 className="card-title pricing-card-title mt-3 text-white">$4000</h1>
              <button type="button" className="w-100 btn btn-lg btn-primary">¡Comprar Online!</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm border-primary">
            <div className="card-header py-3 text-white bg-primary bg-success border-primary">
              <h4 className="my-0 fw-normal">¡Malaga!</h4>
            </div>
            <div className="card-body bg-warning">
              <img src={zapato3} width="90%" alt="comboamericanaconfritas" className="img-fluid" />
              <h1 className="card-title pricing-card-title mt-3 text-white">$5000</h1>
              <button type="button" className="w-100 btn btn-lg btn-primary">¡Comprar Online!</button>
            </div>
          </div>
        </div></div></div></section>        
  
</div>
  )
}

export default Inicio; 