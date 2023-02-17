import React from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    color: #FFF;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700px;
    margin: 15px 0px;
`
const Input = styled.input`
    width: 93%;
    padding: 14px;
    border-radius: 10px;
    font-size: 18px;
`


const Monto = ({monto, setMonto}) => {

  return (
    <>
      <Label>Monto</Label>
        <Input 
            type="text" 
            placeholder="Añade Presupuesto" 
            value={monto}
            onChange={e => setMonto(e.target.value)}
            /> 
    </>
  )
}

export default Monto
