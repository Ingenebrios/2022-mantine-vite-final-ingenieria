import React, { useEffect} from 'react'

// import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import Sal2 from './img_carnes/img2.png'
import Sal1 from './img_carnes/img1.svg'
import Sal3 from './img_carnes/img3.svg'
import Sal4 from './img_carnes/img4.svg'
import Sal5 from './img_carnes/img5.svg'
import Sal6 from './img_carnes/img6.svg'
import Sal7 from './img_carnes/img7.svg'
import Sal8 from './img_carnes/img8.svg'
import './producto.css'
import {
  SimpleGrid, MultiSelect, Card, Image, Text, Badge, Button, Group, Slider, Divider, Stepper, Autocomplete,
} from '@mantine/core'
import { showNotification } from '@mantine/notifications'

function Democarta({ setItems }) {
  // const [cuenta, setCuenta] = React.React.useState(0);
  // console.log(cuenta)

  const [propiedades, setpropiedades] = React.useState(
    [
      {
        value: 'salchicha-de-pavo', label: 'Salchica de pavo', src: Sal1, unidades: 20, precio: 29.50, articulosllevar: 0,
      },
      {
        value: 'salchicha-de-res', label: 'Salchica de res', src: Sal2, unidades: 20, precio: 16.00, articulosllevar: 0,
      },
      {
        value: 'salchicha-de-cocktail', label: 'Salchica Cocktail', src: Sal3, unidades: 30, precio: 26.50, articulosllevar: 0,
      },
      {
        value: 'salchicha-de-gigante', label: 'Salchica Gigante', src: Sal4, unidades: 12, precio: 14.90, articulosllevar: 0,
      },
      {
        value: 'salchicha-de-hotdog', label: 'Salchica de Hotdog', src: Sal5, unidades: 5, precio: 29.50, articulosllevar: 0,
      },
      {
        value: 'bistec-especial', label: 'Bistec Especial', src: Sal6, unidades: 20, precio: 38.60, articulosllevar: 0,
      },
      {
        value: 'bistec-economico', label: 'Bistec Economico', src: Sal7, unidades: 50, precio: 26.50, articulosllevar: 0,
      },
      {
        value: 'arrachera-original', label: 'Arrachera Original', src: Sal8, unidades: 17, precio: 143.90, articulosllevar: 0,
      },
    ],
  )

  const [productosElegidos, setProductosElegidos] = React.useState([])

  useEffect(() => {
    if (productosElegidos.length > 0) {
      // console.log(productosElegidos)
    }
  }, [productosElegidos])

  const actualizarContadores = (indice) => (e) => {
    // console.log('Indice de la propiedad: ' + indice)
    // console.log('Nombre de la propiedad: ' + e)
    /* istanbul ignore next */
    const newArr = [...propiedades]
    /* istanbul ignore next */
    newArr[indice].articulosllevar = e
    /* istanbul ignore next */
    setpropiedades(newArr)

  }
  /* istanbul ignore next */

  const handleBadgeClick = (elemento) => {


    const nuevaLista = [...productosElegidos]

    nuevaLista.push(elemento.value)
    // console.log(nuevaLista)

    setProductosElegidos(nuevaLista)
    return nuevaLista
  }
  /* istanbul ignore next */
  return (

    <div data-testid="divprincipal">
      <Stepper active={3} color="yellow" size="lg" breakpoint="sm" style={{ marginRight: '45px', fontFamily: 'Overpass, sans-serif' }}>
        <Stepper.Step label="Primer paso" description="Elegir supermercado" />
        <Stepper.Step label="Segundo paso" description="Elegir categoria" />
        <Stepper.Step label="Tercer paso" description="Agregar productos" />
        <Stepper.Step label="Cuarto paso" description="Confirmar compra" />
        <Stepper.Completed />
      </Stepper>

      <Divider my="sm" />

      <MultiSelect 
        data={propiedades}
        label="Porfavor elija los productos que desea agregar"
        placeholder="Elije tus productos"
        clearButtonLabel="Limpiar"
        clearable
        maxDropdownHeight={160}
        onChange={setProductosElegidos}
      />

      <div style={{ width: '100%' }} className="seccion_cartas" data-testid="divsecundario">
        {
                    productosElegidos.map((elemento) => {
                      for (let i = 0; i < propiedades.length; i++) {
                        if (elemento === propiedades[i].value) {
                          return (
                            <Card
                              className="addedCard"
                              key={propiedades[i].value}
                              shadow="sm"
                              p="lg"
                              style={{
                                marginTop: '15px', maxWidth: '260px', maxHeight: '300px', minHeight: '100%',
                              }}
                            >
                              <Card.Section>
                                <Image src={propiedades[i].src} height={160} alt="Norway" />
                              </Card.Section>

                              <Group position="apart" style={{ marginBottom: 5, marginTop: '10px' }}>
                                <Text weight={500}>{propiedades[i].label}</Text>
                                <Badge color="green" variant="light">
                                  {`Q ${propiedades[i].precio}`}
                                </Badge>

                              </Group>
                              {/* <Badge style={{ marginTop: '25px' }} color="orange" variant="light">
                                            {"En disponibilidad: " + propiedades[i].unidades + " unidades"}
                                        </Badge> */}
                              {/* <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                                            Book classic tour now
                                        </Button> */}
                              <Slider
                                style={{ marginTop: '35px', marginBottom: '25px' }}
                                color="orange"
                                labelAlwaysOn
                                onChange={actualizarContadores(i)}
                                max={propiedades[i].unidades}
                              />
                            </Card>
                          )
                        }
                      }
                    })
                }
      </div>

      <div className="area_boton_aplicar">

        <Button
          color="orange"
          onClick={() => {
            setItems(propiedades)
            propiedades.map((item) => {
              if (item.articulosllevar > 0) {
                // console.log(item);
                return (
                  showNotification({
                    title: 'Item agregado a carrito',
                    message: `Se ha agregado ${item.label}`,
                  })
                )
              }
            })
          }}
        >
          Agregar a carrito
        </Button>

      </div>

      <Divider my="sm" />

      <div className="seccion_cartas">

        {

                    propiedades.map((elemento) => {
                      if (!productosElegidos.includes(elemento.value)) {
                        return (

                          <Card key={elemento.label} shadow="sm" p="lg" style={{ maxWidth: '300px', margin: '15px' }}>
                            <Card.Section>
                              <Image src={elemento.src} height={160} alt="imagen" />
                            </Card.Section>

                            <Group position="apart" style={{ marginBottom: 5 }}>
                              <Text weight={500}>{elemento.label}</Text>
                              <Badge
                                onClick={() => {
                                  handleBadgeClick(elemento)
                                }}
                                color="orange"
                              >
                                Incluir
                              </Badge>
                            </Group>
                          </Card>

                        )
                      }
                    })

                }
      </div>

    </div>

  )
}
export default Democarta
