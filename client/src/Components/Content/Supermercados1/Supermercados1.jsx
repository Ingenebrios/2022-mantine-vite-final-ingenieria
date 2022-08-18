import React, {useEffect, useState} from 'react'
import { Divider, Stepper, Button, Group } from '@mantine/core'
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { db } from '../../../config/firebase-config'
import './Supermercados1.css'

function Supermercados1({setActiveTab}) {

	const [supermercados, setSupermercados] = useState([]);

	useEffect(() => {

		const referenciaSupermercado = collection(db, 'supermercados')

		const reatrerSupermercado = async () => {
			const datos = await getDocs(referenciaSupermercado)
			setSupermercados(datos.docs.map(doc => ({ ...doc.data(), nombre: doc.nombre })))
		}
		reatrerSupermercado()

	}, []);

  return (
    <div className='SupermercadosContainer'>
      <Stepper active={1} color="yellow" size="lg" breakpoint="sm" style={{ marginRight: '45px', fontFamily: 'Overpass, sans-serif' }}>
				<Stepper.Step label="Primer paso" description="Elegir supermercado">
				</Stepper.Step>
				<Stepper.Step label="Segundo paso" description="Elegir categoria">
				</Stepper.Step>
				<Stepper.Step label="Tercer paso" description="Agregar productos">
				</Stepper.Step>
				<Stepper.Step label="Cuarto paso" description="Confirmar compra">
				</Stepper.Step>
				<Stepper.Completed>
				</Stepper.Completed>
			</Stepper>

			<div className='gridSuperes'>
				{supermercados.map(supermercado => {
					return (
						<div className='super'>
							<img src={supermercado.url} alt={supermercado.nombre} className="superImg" onClick={() => { setActiveTab(1); console.log('first')}} />
						</div>
					)
				})}
			</div>
    </div>
  )
}

export default Supermercados1