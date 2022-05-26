import React, { useState, useEffect } from 'react';
import { Stepper, Divider } from '@mantine/core';


const Checkout = ({ items }) => {
	return (
		<div>
			<Stepper active={3} color="yellow" size="md" breakpoint="sm" style={{ marginRight: '45px' }}>
				<Stepper.Step label="Primer paso" description="Elegir supermercado">
				</Stepper.Step>
				<Stepper.Step label="Segundo paso" description="Agregar productos">
				</Stepper.Step>
				<Stepper.Step label="Tercer paso" description="Confirmar compra">
				</Stepper.Step>
				<Stepper.Completed>
				</Stepper.Completed>
			</Stepper>

			<Divider my="sm" />
			{
				items.map(item => {
					if (item.articulosllevar > 0) {
						return (
							// <h1>{JSON.stringify(item)}</h1>
							<h1 key={item.value}>{item.label}</h1>
						)
					}

				})
			}
		</div>
	)
}

export default Checkout