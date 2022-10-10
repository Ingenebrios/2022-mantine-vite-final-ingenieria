import React from 'react'
import {render} from '@testing-library/react'
import  Carnes from '../Components/Content/Productos/carnes.jsx'
import Checkout from '../Components/Content/Checkout/Checkout.jsx'
import Supermercados from '../Components/Content/Supermercados/Supermercados.jsx'
import HeaderComponent from '../Components/Header/HeaderComponent.jsx'
import Producto from '../Components/Content/Productos/Productos.jsx'
import {
    SimpleGrid,Card, Image, Text, Badge, Button, Group, Divider, Stepper,
  } from '@mantine/core'

it('renders',() => {
    render(<Carnes />)
})
it('renders',() => {
    render(<Supermercados />)
})
it('renders',() => {
    const items = [{
        value:'salchicha-de-pavo',
        label:"salchicha de pavo",
        articulosllevar:3,
        precio:2.12
    }]
    render(<Checkout items={items} />)
})
it('renders',() => {
    const user = {
        nombre: "Pablo",
        abreviacion: "PL"
    }
    render(<HeaderComponent user={user}/>)
})
it('renders',() => {
    const categoria = 'carnes'
    render(<Producto categoria={categoria}/>)
})
it('renders',() => {
    render(<SimpleGrid/>)
})
it('renders',() => {
    render(<Card/>)
})
it('renders',() => {
    render(<Image/>)
})
it('renders',() => {
    render(<Text/>)
})
it('renders',() => {
    render(<Badge/>)
})
it('renders',() => {
    render(<Button/>)
})
it('renders',() => {
    render(<Group/>)
})
it('renders',() => {
    render(<Divider/>)
})
it('renders',() => {
    render(<Stepper/>)
})


