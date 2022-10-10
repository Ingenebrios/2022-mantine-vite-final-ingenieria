import React, { useState, useEffect } from 'react'
import {
  Stepper, Divider, Text, Table, Button, Accordion, Badge, ThemeIcon, Card, Group, Image, Modal, TextInput,
} from '@mantine/core'
import { CurrencyDollar, CirclePlus } from 'tabler-icons-react'

import { showNotification } from '@mantine/notifications'
import {multiplicacion, total, aplicarCupon} from '../../../utils/metodosAritmeticos'
import loc1 from './locations/loc1.png'

import imgcupon from './locations/imagencupon.svg'

import './checkout.css'

function Checkout({ items, setActiveTab }) {
  const [totalCompra, settotalCompra] = useState(0)

  const [abrirModalCupon, setabrirModalCupon] = useState(false)

  const filasTabla = items.map((item) => {
    if (item.articulosllevar > 0) {
      return (
        <tr key={item.value}>
          <td>{item.label}</td>
          <td>{item.articulosllevar}</td>
          <td>{item.precio}</td>
        </tr>
      )
    }
  })

  useEffect(() => {
    let totalloc = 0.0
    for (let i = 0; i < items.length; i++) {
      // console.log(items[i].articulosllevar * items[i].precio)
      // total += (items[i].articulosllevar * items[i].precio)
      let totaltemp = totalloc
      totalloc = total(totaltemp , multiplicacion(items[i].articulosllevar, items[i].precio))
    }
    settotalCompra(totalloc.toFixed(2))
  }, [items])

  // useEffect(() => {
  //   console.log(items)
  // }, [items]);
/* istanbul ignore next */
  return (
  
    <div data-testid="div2">

      <Modal
        opened={abrirModalCupon}
        onClose={() => setabrirModalCupon(false)}
      >
        <TextInput
          style={{ marginBottom: '15px' }}
          placeholder="Ingresar nuevo cupon"
          label="Numeracion del cupon"
        />
        <div style={{
				  width: 240, marginLeft: 'auto', marginRight: 'auto', marginBottom: '15px',
        }}
        >
          <Image
            radius="md"
            src={imgcupon}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            color="yellow"
            onClick={() => {
              settotalCompra((prev) => aplicarCupon(prev, 1.05))
              setabrirModalCupon(false)
              showNotification({
                title: 'Cupon aceptado',
                message: 'Se le ha descontado un 5% a su compra!',
              })
            }}
          >
            Aplicar cupon
          </Button>
        </div>

      </Modal>

      <Stepper active={4} color="yellow" size="lg" breakpoint="sm" style={{ marginRight: '45px', fontFamily: 'Overpass, sans-serif' }}>
        <Stepper.Step label="Primer paso" description="Elegir supermercado" />
        <Stepper.Step label="Segundo paso" description="Elegir categoria" />
        <Stepper.Step label="Tercer paso" description="Agregar productos" />
        <Stepper.Step label="Cuarto paso" description="Confirmar compra" />
        <Stepper.Completed />
      </Stepper>

      <Divider my="sm" />

      {
				(totalCompra > 0)
					?
					(
						<div>
							<Table>
								<thead>
									<tr>
										<th>Producto</th>
										<th>Cantidad deseada</th>
										<th>Precio</th>
									</tr>
								</thead>
								<tbody>{filasTabla}</tbody>
							</Table>

							<Divider my="sm" />

							<div className='area_total_cupon'>
								<Text>Total de su compra: Q{parseFloat(totalCompra).toFixed(2)}</Text>
								<Button className='CuponButton' color="yellow" onClick={() => setabrirModalCupon(true)}>
									Aplicar cupon
								</Button>
							</div>


							<Divider my="sm" />
							<Accordion disableIconRotation icon={
								<ThemeIcon color="green" variant="light">
									<CirclePlus size={16} />
								</ThemeIcon>

							} multiple>
								<Accordion.Item label="Informacion sobre metodo de pago">
									{/* <Badge color="orange">Metodo de pago activo</Badge> */}
									<div className="seccion__tarjetas">
										<div className="card-wrap">
											<div className="card card-front animate resaltada">
												<div className="number">
													<div className="label">Numeracion resaltada</div>
													<span>3456</span>
													<span>2890</span>
													<span>1616</span>
													<span>0089</span>
												</div>
												<div className="owner-data">
													<div className="name">
														<div className="label">Nombre del titular</div>
														<div className="value">Jose Armas Fernandez</div>
													</div>
													<div className="validate">
														<div className="label">Valida hasta</div>
														<div className="value">02/23</div>
													</div>
												</div>
												<div className="flag">
													<img src="https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_vrt_rev_92px_2x.png" alt="mastercard" />
												</div>
											</div>
											<div className="card card-back animate">
												<div className="bar"></div>
												<div className="secret-code">
													<div className="label">CVV</div>
													<div className="value">121</div>
												</div>
											</div>
										</div>
										<div className="card-wrap">
											<div className="card card-front animate">
												<div className="number">
													<div className="label">Numeracion resaltada</div>
													<span>5550</span>
													<span>6143</span>
													<span>3017</span>
													<span>7628</span>
												</div>
												<div className="owner-data">
													<div className="name">
														<div className="label">Nombre del titular</div>
														<div className="value">Jose Armas Fernandez</div>
													</div>
													<div className="validate">
														<div className="label">Valida hasta</div>
														<div className="value">01/27</div>
													</div>
												</div>
												<div className="flag">
													<img src="https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_vrt_rev_92px_2x.png" alt="mastercard" />
												</div>
											</div>
											<div className="card card-back animate">
												<div className="bar"></div>
												<div className="secret-code">
													<div className="label">CVV</div>
													<div className="value">871</div>
												</div>
											</div>
										</div>
									</div>
                  
								</Accordion.Item>
								<Accordion.Item label="Informacion sobre lugar de entrega">



									<div className='area__locations_cartas'>




										<Card shadow="sm" p="lg" style={{ marginTop: '15px', maxWidth: '260px', minWidth: '260px', maxHeight: '300px' }}>
											<Card.Section>
												<Image src={loc1} height={160} alt="Norway" />
											</Card.Section>

											<Group position="apart" style={{ marginBottom: 5, marginTop: '20px' }}>
												<Text weight={500}>Manantiales I</Text>
												<Badge color="orange" variant="light">
													Zona 11
												</Badge>
											</Group>

											<Text size="sm" style={{ lineHeight: 1.5 }}>
												10 calle, 2nda avenida 3388 zona 11, Manantiales I casa 32 Entrada oeste.
											</Text>
										</Card>








										<Card shadow="sm" p="lg" style={{ marginTop: '15px', maxWidth: '260px', minWidth: '260px', maxHeight: '300px' }}>
											<Card.Section>
												<Image src={loc1} height={160} alt="Norway" />
											</Card.Section>

											<Group position="apart" style={{ marginBottom: 5, marginTop: '20px' }}>
												<Text weight={500}>Vista Hermosa II</Text>
												<Badge color="green" variant="light">
													Zona 15
												</Badge>
											</Group>

											<Text size="sm" style={{ lineHeight: 1.5 }}>
												0 calle 22 avenida 3421 zona 15 Edificio Gemini I apartamento 4B Entrada por San Martin.
											</Text>
										</Card>












										<Card shadow="sm" p="lg" style={{ marginTop: '15px', maxWidth: '260px', minWidth: '260px', maxHeight: '300px' }}>
											<Card.Section>
												<Image src={loc1} height={160} alt="Norway" />
											</Card.Section>

											<Group position="apart" style={{ marginBottom: 5, marginTop: '20px' }}>
												<Text weight={500}>Edficio Trello</Text>
												<Badge color="orange" variant="light">
													Zona 10
												</Badge>
											</Group>

											<Text size="sm" style={{ lineHeight: 1.5 }}>
												22 avenida, 12 calle 01010 zona 10 Edifcio Trello Apartamento 15A Entrada por Garita 2B
											</Text>
										</Card>

									</div>






								</Accordion.Item>
							</Accordion>

							<Divider my="sm" />
							<Button
								leftIcon={<CurrencyDollar size={18} />}
								color="orange"
								onClick={() => {
									setActiveTab(0)
								}}
							>
								Realizar compra
							</Button>
						</div>
					)
					:
					null
				  ?					(
  <div>
    <Table>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Cantidad deseada</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>{filasTabla}</tbody>
    </Table>

    <Divider my="sm" />

    <div className="area_total_cupon">
      <Text>
        Total de su compra: Q
        {parseFloat(totalCompra).toFixed(2)}
      </Text>
      <Button color="yellow" onClick={() => setabrirModalCupon(true)}>
        Aplicar cupon
      </Button>
    </div>

    <Divider my="sm" />
    <Accordion
      disableIconRotation
      icon={(
        <ThemeIcon color="green" variant="light">
          <CirclePlus size={16} />
        </ThemeIcon>
      )}
      multiple
    >
      <Accordion.Item label="Informacion sobre metodo de pago">
        {/* <Badge color="orange">Metodo de pago activo</Badge> */}
        <div className="seccion__tarjetas">
          <div className="card-wrap">
            <div className="card card-front animate resaltada">
              <div className="number">
                <div className="label numeration">Numeracion resaltada</div>

                <span>3456</span>
                <span>2890</span>
                <span>1616</span>
                <span>0089</span>
              </div>
              <div className="owner-data">
                <div className="name">
                  <div className="label">Nombre del titular</div>
                  <div className="value">Jose Armas Fernandez</div>
                </div>
                <div className="validate">
                  <div className="label">Valida hasta</div>
                  <div className="value">02/23</div>
                </div>
              </div>
              <div className="flag">
                <img src="https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_vrt_rev_92px_2x.png" alt="mastercard" />
              </div>
            </div>
            <div className="card card-back animate">
              <div className="bar" />
              <div className="secret-code">
                <div className="label">CVV</div>
                <div className="value">121</div>
              </div>
            </div>
          </div>
          <div className="card-wrap">
            <div className="card card-front animate">
              <div className="number">
                <div className="label numeration">Numeracion resaltada</div>

                <span>5550</span>
                <span>6143</span>
                <span>3017</span>
                <span>7628</span>
              </div>
              <div className="owner-data">
                <div className="name">
                  <div className="label">Nombre del titular</div>
                  <div className="value">Jose Armas Fernandez</div>
                </div>
                <div className="validate">
                  <div className="label">Valida hasta</div>
                  <div className="value">01/27</div>
                </div>
              </div>
              <div className="flag">
                <img src="https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_vrt_rev_92px_2x.png" alt="mastercard" />
              </div>
            </div>
            <div className="card card-back animate">
              <div className="bar" />
              <div className="secret-code">
                <div className="label">CVV</div>
                <div className="value">871</div>
              </div>
            </div>
          </div>
        </div>
      </Accordion.Item>
      <Accordion.Item label="Informacion sobre lugar de entrega">

        <div className="area__locations_cartas">

          <Card
            shadow="sm"
            p="lg"
            style={{
										  marginTop: '15px', maxWidth: '260px', minWidth: '260px', maxHeight: '300px',
            }}
          >
            <Card.Section>
              <Image src={loc1} height={160} alt="Norway" />
            </Card.Section>

            <Group position="apart" style={{ marginBottom: 5, marginTop: '20px' }}>
              <Text weight={500}>Manantiales I</Text>
              <Badge color="orange" variant="light">
                Zona 11
              </Badge>
            </Group>

            <Text size="sm" style={{ lineHeight: 1.5 }}>
              10 calle, 2nda avenida 3388 zona 11, Manantiales I casa 32 Entrada oeste.
            </Text>
          </Card>

          <Card
            shadow="sm"
            p="lg"
            style={{
										  marginTop: '15px', maxWidth: '260px', minWidth: '260px', maxHeight: '300px',
            }}
          >
            <Card.Section>
              <Image src={loc1} height={160} alt="Norway" />
            </Card.Section>

            <Group position="apart" style={{ marginBottom: 5, marginTop: '20px' }}>
              <Text weight={500}>Vista Hermosa II</Text>
              <Badge color="green" variant="light">
                Zona 15
              </Badge>
            </Group>

            <Text size="sm" style={{ lineHeight: 1.5 }}>
              0 calle 22 avenida 3421 zona 15 Edificio Gemini I apartamento 4B Entrada por San Martin.
            </Text>
          </Card>

          <Card
            shadow="sm"
            p="lg"
            style={{
										  marginTop: '15px', maxWidth: '260px', minWidth: '260px', maxHeight: '300px',
            }}
          >
            <Card.Section>
              <Image src={loc1} height={160} alt="Norway" />
            </Card.Section>

            <Group position="apart" style={{ marginBottom: 5, marginTop: '20px' }}>
              <Text weight={500}>Edficio Trello</Text>
              <Badge color="orange" variant="light">
                Zona 10
              </Badge>
            </Group>

            <Text size="sm" style={{ lineHeight: 1.5 }}>
              22 avenida, 12 calle 01010 zona 10 Edifcio Trello Apartamento 15A Entrada por Garita 2B
            </Text>
          </Card>

        </div>

      </Accordion.Item>
    </Accordion>

    <Divider my="sm" />
    <Button
      leftIcon={<CurrencyDollar size={18} />}
      color="orange"
      onClick={() => {
								  setActiveTab(0)
      }}
    >
      Realizar compra
    </Button>
  </div>
				  )
				  :					null
			}

    </div>

  )
}

export default Checkout
