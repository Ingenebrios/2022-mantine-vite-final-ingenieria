import { motion } from 'framer-motion'

import React, { useEffect, useState } from 'react'

import { collection, getDocs } from 'firebase/firestore'

import './historial.css'

import {
  Text,
  Paper,
  Divider,
  Code,
  ScrollArea,
  Badge,
  Modal,
  Button,
  Group,
  Notification,
} from '@mantine/core'

import { db } from '../../../config/firebase-config'

function Historial({ id }) {
  const [opened, setOpened] = useState(false)

  const [historial, setHistorial] = useState([])

  const [historialEspecifico, sethistorialEspecifico] = useState([])

  useEffect(() => {
    const referenciaHistorial = collection(db, 'historial')

    const reatrerHistorial = async () => {
      const datos = await getDocs(referenciaHistorial)
      setHistorial(datos.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    reatrerHistorial()
  }, [id])

  useEffect(() => {
    const historialTemp = []

    for (let i = 0; i < historial.length; i++) {
      if (historial[i].id_usuario === id) {
        // console.log(notificaciones[i].fecha.seconds)
        // console.log(new Date(notificaciones[i].fecha.seconds * 1000).toLocaleString())
        historialTemp.push(historial[i])
      }
    }

    sethistorialEspecifico(historialTemp)
  }, [historial])

  // useEffect(() => {
  // 	console.log(historialEspecifico);
  // }, [historialEspecifico]);

  return (
    <div>
      {
				(historialEspecifico.length > 0)
				&& historialEspecifico.map((record) => (
  <Notification color="indigo" title={record.supermercado} disallowClose key={record.id} className="mensaje__individual">
    {record.informacion}
    <Divider my="md" variant="dashed" />
    <Badge color="teal" style={{ marginTop: 14, fontFamily: 'Overpass, sans-serif' }} size="lg">{`${record.costo}$`}</Badge>
    <Badge color="lime" style={{ marginTop: 14, fontFamily: 'Overpass, sans-serif' }} size="lg">Reordenar</Badge>
  </Notification>
				))
			}
    </div>
  )
}

export default Historial
