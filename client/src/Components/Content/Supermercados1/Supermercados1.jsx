import React from 'react'
import { Divider, Stepper, Button, Group } from '@mantine/core'

function Supermercados1() {
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
    </div>
  )
}

export default Supermercados1