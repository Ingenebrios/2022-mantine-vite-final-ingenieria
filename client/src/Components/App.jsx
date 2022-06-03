import React, { useState, useEffect } from 'react';

import { collection, getDocs } from 'firebase/firestore'

import { db } from '../config/firebase-config'


import { NotificationsProvider } from '@mantine/notifications';


import { MantineProvider } from '@mantine/core';

import { auth } from '../config/firebase-config-auth'
import { signOut } from 'firebase/auth'
import { signInWithEmailAndPassword } from 'firebase/auth'

import Login from './LoginRegister/Login'










import {
  AppShell
} from '@mantine/core';

import HeaderComponent from './Header/HeaderComponent'
import NavbarComponent from './Navbar/NavbarComponent';
import ContentComponent from './Content/ContentComponent'

const ID_USUARIO = "AoUr7wmX3kYc9tp9kQQ2"

function App() {

  const [opened, setOpened] = useState(false);

  const [usuarios, setUsuarios] = useState({});

  const [usuario, setUsuario] = useState({});


  const [usuarioLoggeado, setUsuarioLoggeado] = useState(false);

  const [correoUsuarioLoggeado, setcorreoUsuarioLoggeado] = useState('');



  useEffect(() => {
    const referenciaUsuarios = collection(db, 'usuarios')
    const reatrerUsuarios = async () => {
      const datos = await getDocs(referenciaUsuarios)
      setUsuarios(datos.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }
    reatrerUsuarios()
  }, []);

  useEffect(() => {
    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].id === ID_USUARIO) {
        setUsuario(usuarios[i])
      }
    }
  }, [usuarios]);

  useEffect(() => {
    if (correoUsuarioLoggeado.length > 0) {
      console.log('Se ha loggeado con el correo: ' + correoUsuarioLoggeado)
    }
  }, [correoUsuarioLoggeado]);

  return (

    <MantineProvider>
      <NotificationsProvider>
        <div className="App">
          {
            usuarioLoggeado
              ?
              <AppShell
                navbarOffsetBreakpoint="sm"
                asideOffsetBreakpoint="sm"
                fixed
                navbar={
                  <NavbarComponent opened={opened} userID={usuario.id} />
                }
                header={
                  <HeaderComponent setOpened={setOpened} opened={opened} user={usuario} />
                }
              >
                <ContentComponent />
              </AppShell>
              :
              <Login setUsuarioLoggeado={setUsuarioLoggeado} setcorreoUsuarioLoggeado={setcorreoUsuarioLoggeado} />
          }
        </div>
      </NotificationsProvider>
    </MantineProvider>

  )
}

export default App
