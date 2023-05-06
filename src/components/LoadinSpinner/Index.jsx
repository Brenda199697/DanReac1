import React from 'react';
import { Spinner, Container } from 'react-bootstrap';
import zapato from '../../assets/img/zapato.jpgjpg';

function LoadingSpinner() {
  return (
    <Container><img src={zapato} alt="zapato" className="img-fluid" /><Spinner animation="border" role="status">
  <span className="visually-hidden">Cargando...</span>
</Spinner>

</Container>
  )
}

export default LoadingSpinner