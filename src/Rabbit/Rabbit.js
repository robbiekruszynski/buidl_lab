import React, {Component } from 'react';
import styled from 'styled-components';
import pic from '../assets/img/RabbitLogo.png';
import picTwo from '../assets/img/RabbitLogoTwo.png';


function Rabbit() {
  const Lucky = styled.h1`
  color:red;
  `;

  return(
<div>
<img src = { pic }/>
<img src = { picTwo }/>
</div>

  )
}


export default Rabbit;