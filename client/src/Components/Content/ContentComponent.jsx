import React, { useState } from 'react'

import {
  Tabs,
} from '@mantine/core'

// import { Photo, MessageCircle, Settings } from 'tabler-icons-react'

import Supermercados1 from './Supermercados1/Supermercados1'

import Supermercados from './Supermercados/Supermercados'

import Democarta from './Productos/carnes'

import Checkout from './Checkout/Checkout'

function ContentComponent() {
  const [supermercado, setSupermercado] = useState()
  const [categoria, setcategoria] = useState([])

  const [items, setItems] = useState([])

  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="content__container">

      <Tabs grow position="apart" variant="outline" active={activeTab} onTabChange={setActiveTab}>
        <Tabs.Tab label="Supermercados">

          <Supermercados1 setActiveTab={setActiveTab} />

        </Tabs.Tab>

        <Tabs.Tab label="Categorias">

          <Supermercados
            setActiveTab={setActiveTab}
            supermercado={supermercado}
            setSupermercado={setSupermercado}
            setCategoria={setcategoria}
            categoria={categoria}
          />

        </Tabs.Tab>
        <Tabs.Tab label="Productos">

          <Democarta setItems={setItems} />

        </Tabs.Tab>
        <Tabs.Tab label="Checkout">

          <Checkout items={items} setActiveTab={setActiveTab} />

        </Tabs.Tab>
      </Tabs>
    </div>
  )
}

export default ContentComponent
