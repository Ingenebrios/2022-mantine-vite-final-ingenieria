import React from 'react'
import {render} from '@testing-library/react'
import  Carnes from '../Components/Content/Productos/carnes.jsx'
// import Checkout from '../Components/Content/Checkout/Checkout.jsx'
import Supermercados from '../Components/Content/Supermercados/Supermercados.jsx'
import HeaderComponent from '../Components/Header/HeaderComponent.jsx'
import Producto from '../Components/Content/Productos/Productos.jsx'

import {
    SimpleGrid,Card, Image, Text, Badge, Button, Group, Divider, Stepper,Modal, AppShell, Navbar, Header, Aside, Footer
  } from '@mantine/core'

const setActiveTab = () =>{

}


it('renders',() => {
    render(<Carnes />)
})


describe("Carnes Component", () =>{

    it('renders',() => {
        const {getByTestId} = render(<Carnes />)
        const div1 = getByTestId("divprincipal")
        expect(div1).toBeTruthy()
    })
    it('renders',() => {
        const {getByTestId} = render(<Carnes />)
        const div1 = getByTestId("divsecundario")
        expect(div1).toBeTruthy()
    })
    
})

it('renders',() => {
    render(<Supermercados setActiveTab={setActiveTab}/>)
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
it('renders',() => {
    render(<Modal/>)
})
it('renders',() => {
    render(<AppShell/>)
})
it('renders',() => {
    render(<Navbar/>)
})
it('renders',() => {
    render(<Header/>)
})
it('renders',() => {
    render(<Aside/>)
})
it('renders',() => {
    render(<Footer/>)
})

