import React from 'react'
import {render} from '@testing-library/react'
import  Carnes from '../Components/Content/Productos/carnes.jsx'
import Supermercados from '../Components/Content/Supermercados/Supermercados.jsx'


it('renders',() => {
    render(<Carnes />)
})
it('renders',() => {
    render(<Supermercados />)
})

