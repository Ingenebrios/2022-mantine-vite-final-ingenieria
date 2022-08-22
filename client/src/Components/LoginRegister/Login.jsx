import React, { useState, useEffect } from 'react'

import './login.css'

import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import imgRegistro from './login-assets/register.svg'
import imgLogin from './login-assets/login.svg'

import { auth } from '../../config/firebase-config-auth'

function Login({ setUsuarioLoggeado, setcorreoUsuarioLoggeado }) {
  const [loginPage, setLoginPage] = useState(false)

  const [usuario, setUsuario] = useState()
  const [clave, setClave] = useState()
  const loggear = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, usuario, clave)
      console.log(user)
      setcorreoUsuarioLoggeado(user.user.email)
      if (user) {
        setUsuarioLoggeado(true)
      }
    } catch (error) {
      console.log(error)
    }

    // ELIMINAR ESTO UNA VEZ SE TERMINEN LOS TEST

    setUsuarioLoggeado(true)
  }

  const [nuevoUsuario, setNuevoUsuario] = useState()
  const [nuevaClave, setNuevaClave] = useState()
  const registrar = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, nuevoUsuario, nuevaClave)
      setcorreoUsuarioLoggeado(user.user.email)
      if (user) {
        setUsuarioLoggeado(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="login-page">
      {
				loginPage
				  ?					(
  <div className="form">
    <img src={imgRegistro} alt="" className="img_registro" />
    <div className="register-form">
      <input type="text" placeholder="correo" onChange={(e) => { setNuevoUsuario(e.target.value) }} />
      <input type="password" placeholder="clave" onChange={(e) => { setNuevaClave(e.target.value) }} />
      <button onClick={() => { registrar() }}>Crear</button>
      <p className="message">
        Ya tiene una cuenta?
        <a
          href="#"
          onClick={() => {
            setLoginPage(false)
          }}
        >
          Iniciar
        </a>
      </p>
    </div>
  </div>
				  )
				  :					(
  <div className="form">
    <img src={imgLogin} alt="" className="img_registro" />
    <div className="login-form">
      <input type="text" placeholder="correo" onChange={(e) => { setUsuario(e.target.value) }} />
      <input type="password" placeholder="clave" onChange={(e) => { setClave(e.target.value) }} />
      <button onClick={() => loggear()}>Iniciar</button>
      <p className="message">
        No estas registrado?
        <a
          href="#"
          onClick={() => {
            setLoginPage(true)
          }}
        >
          Crear cuenta
        </a>
      </p>
    </div>
  </div>
				  )
			}

    </div>
  )
}

export default Login
