import React, { useState } from 'react'

import './headercomponent.css'

import {
  Header,
  Text,
  MediaQuery,
  Burger,
  Code,
  Avatar,
  Menu,
  Divider,
  Drawer,
  Button,
  Group,
  TextInput,
  Textarea,
  Image,
} from '@mantine/core'
import {
  Settings, Search, Photo, MessageCircle, Trash, UserMinus, UserExclamation,
} from 'tabler-icons-react'
import LogoPedidotes from '../../assets/logo/logo_pedidotes.png'

import imagenQuejas from './quejas.png'

function HeaderComponent({ setOpened, opened, user }) {
  const [openDrawer, setOpenDrawer] = useState(false)
/* istanbul ignore next */
  return (
    <Header height={60} p="md" className="header__container">
      <Drawer
        opened={openDrawer}
        onClose={() => setOpenDrawer(false)}
        title="Nueva queja"
        padding="xl"
        size="xl"
      >

        <div className="area_nombre_apellido_queja " >
          <TextInput
            className="input_nombre_queja"
            placeholder="Nombre"
            label="Ingrese su nombre"
          />
          <TextInput
            className="input_nombre_queja"
            placeholder="Apellido"
            label="Ingrese su apellido"
          />
        </div>

        <TextInput
          className="input_nombre_queja"
          placeholder="Correo"
          label="Ingrese su correo"
        />

        <Textarea
          className="input_nombre_queja"
          placeholder="Escriba su queja"
          label="Escriba su queja detallada porfavor"
          autosize
          minRows={2}
        />

        <Button
          color="yellow"
          className="input_nombre_queja"
          onClick={() => {
            setOpenDrawer(false)
          }}
        >
          Mandar queja
        </Button>

        <div style={{
          width: 340, marginLeft: 'auto', marginRight: 'auto', marginTop: '50px', marginBottom: '50px',
        }} data-testid="div1">
          <Image
            radius="md"
            src={imagenQuejas}
            alt="Random unsplash image"
          />
        </div>

        <Text align="center">Gracias por escribirnos, intentamos todos los dias mejorar su experiencia con nosotros.</Text>

      </Drawer>
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            mr="xl"
          />
        </MediaQuery>
        <div className="header__area__aplicacion">
          <img src={LogoPedidotes} alt="logo_aplicacion" className="logo__aplicacion" />

          <div className="area__avatar__aplicacion">
            {/* <Code className='id__usuario__aplicacion'>{user.id}</Code> */}
            {/* <Code className='id__usuario__aplicacion'>{user.correo}</Code> */}
            <Text className="nombre__avatar__aplicacion">{user.nombre}</Text>
            <Menu control={<Avatar color="orange" radius="xl" className="logo__avatar__aplicacion">{user.abreviacion}</Avatar>}>
              <Menu.Label>Aplicacion</Menu.Label>
              <Menu.Item icon={<Settings size={14} />}>Configuracion</Menu.Item>
              <Menu.Item icon={<MessageCircle size={14} />}>Messages</Menu.Item>
              <Menu.Item
                onClick={() => {
								  setOpenDrawer(true)
                }}
                icon={<UserExclamation size={14} />}
              >
                Nueva Queja
              </Menu.Item>

              <Divider />

              <Menu.Label>Cuenta</Menu.Label>
              <Menu.Item color="red" icon={<UserMinus size={14} />} onClick={() => { window.location.reload(false) }}>Cerrar sesion</Menu.Item>
            </Menu>
          </div>
        </div>
      </div>
    </Header>
  )
}

export default HeaderComponent
