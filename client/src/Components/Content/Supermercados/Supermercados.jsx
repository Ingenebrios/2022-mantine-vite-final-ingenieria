import React, { useState } from 'react'
import { Autocomplete } from '@mantine/core';
import { Badge } from '@mantine/core';
import { LetterX } from 'tabler-icons-react';
import './Supermercados.css'

import { Divider, Stepper, Button, Group } from '@mantine/core'

import carnes from '../../../assets/supermercados/carnes.png'
import frutas from '../../../assets/supermercados/Frutas.png'
import panaderia from '../../../assets/supermercados/Panaderia.png'
import huevos from '../../../assets/supermercados/Huevos.png'
import mariscos from '../../../assets/supermercados/Mariscos.png'
import aceite from '../../../assets/supermercados/Aceite.png'
import pastas from '../../../assets/supermercados/Pastas.png'
import enlatados from '../../../assets/supermercados/Enlatados.png'
import granos from '../../../assets/supermercados/Granos.png'
import harinas from '../../../assets/supermercados/Harinas.png'
import snacks from '../../../assets/supermercados/Snacks.png'
import bebidas from '../../../assets/supermercados/Bebidas.png'

const imagenes = [
	{ id: 'Carnes y embutidos', src: carnes },
	{ id: 'Frutas y verduras', src: frutas },
	{ id: 'Panderia y dulces', src: panaderia },
	{ id: 'Lacteos y huevos', src: huevos },
	{ id: 'Mariscos y pescado', src: mariscos },
	{ id: 'Aceites y mantequilla', src: aceite },
	{ id: 'Pastas', src: pastas },
	{ id: 'Enlatados', src: enlatados },
	{ id: 'Granos y semillas', src: granos },
	{ id: 'Harinas Preparadas', src: harinas },
	{ id: 'Snacks', src: snacks },
	{ id: 'Bebidas', src: bebidas },
]

const Supermercados = ({ supermercado, setSupermercado, setCategoria, categoria, setActiveTab  }) => {

	// const categoriaUnica = []
	const [categoriaUnica, setCategoriaUnica] = useState([]);

	categoria.map(categoria => {
		if (categoriaUnica.indexOf(categoria) === -1) {
			categoriaUnica.push(categoria);
		}
	})

	return (
		<div className="SupermercadoContainer">

			<Stepper active={2} color="yellow" size="lg" breakpoint="sm" style={{ marginRight: '45px', fontFamily: 'Overpass, sans-serif' }}>
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

			<Divider my="sm" />

			{/* <Autocomplete
				value={supermercado} onChange={setSupermercado}
				label="Seleccione el supermercado de su eleccion."
				placeholder="Supermercados"
				data={['La Torre', 'Paiz', 'Walmart', 'PriceSmart', 'Maxi Despensa']}
				className="AutoSupermercado"
			/> */}
			{/* {
				categoriaUnica.map(badge => {
					return (
						<Badge className="badge" key={badge}>
							{badge}
							<LetterX
								size={15}
								strokeWidth={2}
								color={'black'}
								className="letterX"
								onClick={() => {

									const nuevaLista = [...categoriaUnica]

									// for (let i = 0; i < categoriaUnica.length; i++) {
									// 	console.log(categoriaUnica[i] != badge)
									// 	if (categoriaUnica[i] != badge) {
									// 		// console.log('agregado')
									// 		nuevaLista.push(categoriaUnica[i])
									// 	}
									// }

									const index = categoriaUnica.indexOf(badge)

									// const index = array.indexOf(2);
									if (index > -1) {
										nuevaLista.splice(index, 1);
									}

									// console.log(nuevaLista)

									// console.log(index);

									// setProductsArray([
									// 	...products.slice(0, index),
									// 	...products.slice(index + 1, products.length)
									// ])\

									// const nuevaArray = [...categoriaUnica.splice(0, index), ...categoriaUnica.splice(index + 1, categoriaUnica.length)]

									// console.log(nuevaArray)

									// console.log(nuevaLista);

									setCategoriaUnica(nuevaLista)

								}}
							/>
						</Badge>
					);
				})
			} */}
			<div className="supermercado">
				<div className="inferior">
					<div className="gridImagenes">
						{imagenes.map(imagen => {
							return (
								<div key={imagen.id}>
									<img onClick={() => setActiveTab(2)} alt={imagen.id} className="imagen" src={imagen.src}></img>
									<h3 id="tituloImg">{imagen.id}</h3>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Supermercados