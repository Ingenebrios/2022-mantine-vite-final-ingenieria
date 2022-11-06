import React, { useState } from 'react'
import {
  Divider, Stepper,
} from '@mantine/core'

import './Supermercados.css'

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

function Supermercados({
  supermercado, setSupermercado, setCategoria, categoria, setActiveTab,
}) {
  // const categoriaUnica = []
  /* istanbul ignore next */ 
  const categoriaUnica = []

  /* istanbul ignore next */
  return (
    <div className="SupermercadoContainer">

      <Stepper active={2} color="yellow" size="lg" breakpoint="sm" style={{ marginRight: '45px', fontFamily: 'Overpass, sans-serif' }}>
        <Stepper.Step label="Primer paso" description="Elegir supermercado" />
        <Stepper.Step label="Segundo paso" description="Elegir categoria" />
        <Stepper.Step label="Tercer paso" description="Agregar productos" />
        <Stepper.Step label="Cuarto paso" description="Confirmar compra" />
        <Stepper.Completed />
      </Stepper>

      <Divider my="sm" />

      <div className="supermercado">
        <div className="inferior">
          <div className="gridImagenes">
            {imagenes.map((imagen) => (
              <div key={imagen.id}>
                <img onClick={() => 
                  setActiveTab(2)} 
                  alt={imagen.id} className="imagen" src={imagen.src} />
                <h3 id="tituloImg">{imagen.id}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Supermercados
