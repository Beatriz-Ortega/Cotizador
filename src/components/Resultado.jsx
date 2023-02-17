import React from 'react'
import styled from '@emotion/styled'
import Monto from './Monto'

const Contenedor = styled.div`
  color: #FFF;
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 30px;

`
const Texto = styled.p`
    font-size: 18px;
  span{
    font-weight: 700px;
  }
`
const Precio = styled.p`
  font-size: 24px;
  span{
    font-weight: 700px;
  }
`

const Imagen = styled.img`
  display: block;
  width: 120px;
`

const Resultado = ({result, monto, setMonto}) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = result;
  const cotiza= result.PRICE;
  const cotizaFormat= cotiza.replace(/[^0-9\.]+/g,"");
  const valorCripto=Number(cotizaFormat);
  const valorCotizar=Number(monto);
  const respuesta = (valorCotizar/valorCripto).toFixed(6);

  return (
    <Contenedor>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto"/>
      <div>
          <Precio>Monto cotizado: <span>{respuesta}</span></Precio>
          <Texto>Valor del día: <span>{PRICE}</span></Texto>
          <Texto>Valor más alto del día: <span>{HIGHDAY}</span></Texto>
          <Texto>Valor más bajo del día: <span>{LOWDAY}</span></Texto>
          <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
          <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
        </div>
    </Contenedor>
  )
}

export default Resultado
