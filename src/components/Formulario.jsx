import React from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import Monto from './Monto'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'
import { useEffect, useState } from 'react'

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700px;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 10px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }

`

const Formulario = ({setMonedas, monto, setMonto}) => {

    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false);
    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas);
    const [criptomoneda, SelectCriptomoneda] = useSelectMonedas('Elige tu criptomoneda', criptos);
    const [mensaje, setMensaje] = useState('')

    useEffect(() => {
        const consultarAPI = async () =>{
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

            const answer = await fetch(url);
            const result = await answer.json();

            const arrayCriptos = result.Data.map( cripto => {
                const objetoCrito = {
                    id: cripto.CoinInfo.Name,
                    name: cripto.CoinInfo.FullName
                }
                return objetoCrito
            })
            setCriptos(arrayCriptos);
        }
        consultarAPI();
    }, [])

    const handleSubmit = e => {
        e.preventDefault();

        { !Number(monto) || Number(monto) < 0 ? setMensaje('no es un monto valido') : setMensaje('') }

        if([moneda, criptomoneda, monto].includes('')){
            setError(true);
            return;
        }
        setError(false);
        setMonedas({
            moneda,
            criptomoneda, 
            monto
        })
    }

  return (
    <>
    {error && <Error>Todos los campos son obligatorios</Error> }
    <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCriptomoneda />
        <Monto 
            monto={monto}
            setMonto={setMonto}
        />
        <InputSubmit type="submit" value="Cotizar" />
        {mensaje && <Error>{mensaje}</Error>}
    </form>
    </>
  )
}

export default Formulario


