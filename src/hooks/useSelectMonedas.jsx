import React from 'react'
import styled from '@emotion/styled'
import {useState} from 'react'


const Label = styled.label`
    color: #FFF;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700px;
    margin: 15px 0px;
`

const Select = styled.select`
    width: 100%;
    padding: 14px;
    border-radius: 10px;
    font-size: 18px;
`

const useSelectMonedas = (label, opciones) => {

    const [generic, setGeneric] = useState('');

    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
            <Select
                value={generic}
                onChange = { e => setGeneric( e.target.value)}
            >
                <option value=''>Seleccione</option>

                {opciones.map( opcion => (
                    <option key={opcion.id} value={opcion.id}>{opcion.name}</option>
                ))}

            </Select>
        </>
    )

    return [generic, SelectMonedas]
    
}

export default useSelectMonedas
