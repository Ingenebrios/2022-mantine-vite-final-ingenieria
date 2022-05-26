import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
// import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import Sal2 from "./img_carnes/img2.png"
import Sal1 from "./img_carnes/img1.svg"
import Sal3 from "./img_carnes/img3.svg"
import Sal4 from "./img_carnes/img4.svg"
import Sal5 from "./img_carnes/img5.svg"
import Sal6 from "./img_carnes/img6.svg"
import Sal7 from "./img_carnes/img7.svg"
import Sal8 from "./img_carnes/img8.svg"
import './producto.css'
import { SimpleGrid } from '@mantine/core';
import { MultiSelect, Card, Image, Text, Badge, Button, Group, Slider } from '@mantine/core';

function Democarta() {
    // const [cuenta, setCuenta] = React.useState(0);
    // console.log(cuenta)

    const [propiedades, setpropiedades] = useState(
        [
            { value: 'salchicha-de-pavo', label: 'Salchica de pavo', src: Sal1, unidades: 20, precio: 29.50, articulosllevar: 0 },
            { value: 'salchicha-de-res', label: 'Salchica de res', src: Sal2, unidades: 20, precio: 16.00, articulosllevar: 0 },
            { value: 'salchicha-de-cocktail', label: 'Salchica Cocktail', src: Sal3, unidades: 30, precio: 26.50, articulosllevar: 0 },
            { value: 'salchicha-de-gigante', label: 'Salchica Gigante', src: Sal4, unidades: 12, precio: 14.90, articulosllevar: 0 },
        ]
    );

    const [productosElegidos, setProductosElegidos] = useState([]);

    useEffect(() => {
        if (productosElegidos.length > 0) {
            // console.log(productosElegidos)
        }
    }, [productosElegidos]);

    const actualizarContadores = indice => e => {
        // console.log('Indice de la propiedad: ' + indice)
        // console.log('Nombre de la propiedad: ' + e)
        let newArr = [...propiedades]
        newArr[indice].articulosllevar = e
        setpropiedades(newArr)
    }

    return (

        <div>

            <MultiSelect
                data={propiedades}
                label="Porfvor elija los productos que desea agregar"
                placeholder="Elije tus productos"
                clearButtonLabel="Limpiar"
                clearable
                maxDropdownHeight={160}
                onChange={setProductosElegidos}
            />

            <div style={{ width: '100%' }} className="seccion_cartas">
                {
                    productosElegidos.map(elemento => {
                        for (let i = 0; i < propiedades.length; i++) {
                            if (elemento === propiedades[i].value) {
                                return (
                                    <Card key={propiedades[i].value} shadow="sm" p="lg" style={{ marginTop: '15px', maxWidth: '300px', minWidth: '300px' }}>
                                        <Card.Section>
                                            <Image src={propiedades[i].src} height={160} alt="Norway" />
                                        </Card.Section>

                                        <Group position="apart" style={{ marginBottom: 5, marginTop: '10px' }}>
                                            <Text weight={500}>{propiedades[i].label}</Text>
                                            <Badge color="green" variant="light">
                                                {"Q " + propiedades[i].precio}
                                            </Badge>

                                        </Group>
                                        {/* <Badge style={{ marginTop: '25px' }} color="orange" variant="light">
                                            {"En disponibilidad: " + propiedades[i].unidades + " unidades"}
                                        </Badge> */}
                                        {/* <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                                            Book classic tour now
                                        </Button> */}
                                        <Slider style={{ marginTop: '35px', marginBottom: '25px' }}
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

            <Button color='orange' onClick={() => console.log(propiedades)}>Aplicar cambios</Button>


        </div>

        // <div style={{width:1200,margin:'auto'}}>
        //     <SimpleGrid
        //         cols={4}
        //         spacing="lg"
        //         breakpoints={
        //             [
        //                 {maxWidth:980,cols:3,spacing:'md'},
        //                 {maxWidth:755,cols:2,spacing:'sm'},
        //                 {maxWidth:755,cols:1,spacing:'sm'},
        //             ]
        //         }
        //     >

        //         <Card shadow="sm" p="lg" style={{height:350}}>
        //             <Card.Section>
        //                 <Image src={Sal2} height={160} alt="Carnes"/>
        //             </Card.Section>
        //             <Group position="apart" style={{ marginBottom: 5}}>
        //                 <Text weight={500}>Salchichas Toledo</Text>
        //             </Group>
        //             <Text size="sm" style={{lineHeight: 1.5 }}>
        //                 Marca: Toledo
        //             </Text>
        //             <Text size="sm" style={{lineHeight: 1.5 }}>
        //                 Cantidad: 10 unidades
        //             </Text>
        //             <Text size="sm" style={{lineHeight: 1.5 }}>
        //                 Precio: Q20.00
        //             </Text>
        //             <div className="caja_info">
        //                 <div className='boton_izquierda'>
        //                     <button className='boton_menos'>-</button>
        //                 </div>
        //                 <div className='boton_derecha'>
        //                     <button className='boton_mas' onClick={()=>setCuenta(prev => {prev + 1})}>+</button>
        //                 </div>
        //                 <div className='cuenta'>
        //                     <p className='dato'>{cuenta}</p>
        //                 </div>
        //             </div>

        //         </Card>
        //         <Card shadow="sm" p="lg" style={{height:350}}>
        //             <Card.Section>
        //                 <Image src={Sal1} height={160} alt="Carnes"/>
        //             </Card.Section>
        //             <Group position="apart" style={{ marginBottom: 5}}>
        //                 <Text weight={500}>Salchichas Bremen</Text>
        //             </Group>
        //             <Text size="sm" style={{lineHeight: 1.5 }}>
        //                 Marca: Bremen
        //             </Text>
        //             <Text size="sm" style={{lineHeight: 1.5 }}>
        //                 Cantidad: 20 unidades
        //             </Text>
        //             <Text size="sm" style={{lineHeight: 1.5 }}>
        //                 Precio: Q16.00
        //             </Text>
        //             <div className="caja_info">
        //                 <div className='boton_izquierda'>
        //                     <button className='boton_menos'>-</button>
        //                 </div>
        //                 <div className='boton_derecha'>
        //                     <button className='boton_mas' onClick={()=>setCuenta(prev => {prev + 1})}>+</button>
        //                 </div>
        //                 <div className='cuenta'>
        //                     <p className='dato'>{cuenta}</p>
        //                 </div>
        //             </div>

        //         </Card>
        //         <Card shadow="sm" p="lg" style={{height:350}}>
        //             <Card.Section>
        //                 <Image src={Sal3} height={160} alt="Carnes"/>
        //             </Card.Section>
        //             <Group position="apart" style={{ marginBottom: 5}}>
        //                 <Text weight={500}>Salchichas Toledo Cocktail</Text>
        //             </Group>
        //             <Text size="sm" style={{lineHeight: 1.5 }}>
        //                 Marca: Toledo
        //             </Text>
        //             <Text size="sm" style={{lineHeight: 1.5 }}>
        //                 Cantidad: 460 gramos
        //             </Text>
        //             <Text size="sm" style={{lineHeight: 1.5 }}>
        //                 Precio: Q26.50
        //             </Text>
        //             <div className="caja_info">
        //                 <div className='boton_izquierda'>
        //                     <button className='boton_menos'>-</button>
        //                 </div>
        //                 <div className='boton_derecha'>
        //                     <button className='boton_mas' onClick={()=>setCuenta(prev => {prev + 1})}>+</button>
        //                 </div>
        //                 <div className='cuenta'>
        //                     <p className='dato'>{cuenta}</p>
        //                 </div>
        //             </div>

        //         </Card>
        //         <Card shadow="sm" p="lg" style={{height:350}}>
        //             <Card.Section>
        //                 <Image src={Sal4} height={160} alt="Carnes"/>
        //             </Card.Section>
        //             <Group position="apart" style={{ marginBottom: 5}}>
        //                 <Text weight={500}>Salchichas Gigante Bremen</Text>
        //             </Group>
        //             <Text size="sm" style={{lineHeight: 1.5 }}>
        //                 Marca: Bremen
        //             </Text>
        //             <Text size="sm" style={{lineHeight: 1.5 }}>
        //                 Cantidad: 12 unidades
        //             </Text>
        //             <Text size="sm" style={{lineHeight: 1.5 }}>
        //                 Precio: Q14.90
        //             </Text>
        //             <div className="caja_info">
        //                 <div className='boton_izquierda'>
        //                     <button className='boton_menos'>-</button>
        //                 </div>
        //                 <div className='boton_derecha'>
        //                     <button className='boton_mas' onClick={()=>setCuenta(prev => {prev + 1})}>+</button>
        //                 </div>
        //                 <div className='cuenta'>
        //                     <p className='dato'>{cuenta}</p>
        //                 </div>
        //             </div>

        //         </Card>
        //         <Card shadow="sm" p="lg" style={{height:350}}>
        //             <Card.Section>
        //                 <Image src={Sal5} height={160} alt="Carnes"/>
        //             </Card.Section>
        //             <Group position="apart" style={{ marginBottom: 5}}>
        //                 <Text weight={500}>Salchichas Hot Dog</Text>
        //             </Group>
        //             <Text size="sm" style={{lineHeight: 1.5 }}>
        //                 Marca: FUD
        //             </Text>
        //             <Text size="sm" style={{lineHeight: 1.5 }}>
        //                 Cantidad: 500 gramos
        //             </Text>
        //             <Text size="sm" style={{lineHeight: 1.5 }}>
        //                 Precio: Q32.20
        //             </Text>
        //             <div className="caja_info">
        //                 <div className='boton_izquierda'>
        //                     <button className='boton_menos'>-</button>
        //                 </div>
        //                 <div className='boton_derecha'>
        //                     <button className='boton_mas' onClick={()=>setCuenta(prev => {prev + 1})}>+</button>
        //                 </div>
        //                 <div className='cuenta'>
        //                     <p className='dato'>{cuenta}</p>
        //                 </div>
        //             </div>

        //         </Card>
        //         <Card shadow="sm" p="lg" style={{height:350}}>
        //             <Card.Section>
        //                 <Image src={Sal6} height={160} alt="Carnes"/>
        //             </Card.Section>
        //             <Group position="apart" style={{ marginBottom: 5}}>
        //                 <Text weight={500}>Bistec Especial</Text>
        //             </Group>
        //             <Text size="sm" style={{lineHeight: 1.5 }}>
        //                 Marca: Carnes La Torre
        //             </Text>
        //             <Text size="sm" style={{lineHeight: 1.5 }}>
        //                 Cantidad: 1.40 libras
        //             </Text>
        //             <Text size="sm" style={{lineHeight: 1.5 }}>
        //                 Precio: Q38.05
        //             </Text>
        //             <div className="caja_info">
        //                 <div className='boton_izquierda'>
        //                     <button className='boton_menos'>-</button>
        //                 </div>
        //                 <div className='boton_derecha'>
        //                     <button className='boton_mas' onClick={()=>setCuenta(prev => {prev + 1})}>+</button>
        //                 </div>
        //                 <div className='cuenta'>
        //                     <p className='dato'>{cuenta}</p>
        //                 </div>
        //             </div>

        //         </Card>
        //         <Card shadow="sm" p="lg" style={{height:350}}>
        //             <Card.Section>
        //                 <Image src={Sal7} height={160} alt="Carnes"/>
        //             </Card.Section>
        //             <Group position="apart" style={{ marginBottom: 5}}>
        //                 <Text weight={500}>Bistec economico</Text>
        //             </Group>
        //             <Text size="sm" style={{lineHeight: 1.5 }}>
        //                 Marca: Carnes La Torre
        //             </Text>
        //             <Text size="sm" style={{lineHeight: 1.5 }}>
        //                 Cantidad: 1.50 lb
        //             </Text>
        //             <Text size="sm" style={{lineHeight: 1.5 }}>
        //                 Precio: Q29.25
        //             </Text>
        //             <div className="caja_info">
        //                 <div className='boton_izquierda'>
        //                     <button className='boton_menos'>-</button>
        //                 </div>
        //                 <div className='boton_derecha'>
        //                     <button className='boton_mas' onClick={()=>setCuenta(prev => {prev + 1})}>+</button>
        //                 </div>
        //                 <div className='cuenta'>
        //                     <p className='dato'>{cuenta}</p>
        //                 </div>
        //             </div>

        //         </Card>
        //         <Card shadow="sm" p="lg" style={{height:350}}>
        //             <Card.Section>
        //                 <Image src={Sal8} height={160} alt="Carnes"/>
        //             </Card.Section>
        //             <Group position="apart" style={{ marginBottom: 5}}>
        //                 <Text weight={500}>Bistec Ternera</Text>
        //             </Group>
        //             <Text size="sm" style={{lineHeight: 1.5 }}>
        //                 Marca: Carnes La Torre
        //             </Text>
        //             <Text size="sm" style={{lineHeight: 1.5 }}>
        //                 Cantidad: 1.40 lb
        //             </Text>
        //             <Text size="sm" style={{lineHeight: 1.5 }}>
        //                 Precio: Q38.05
        //             </Text>
        //             <div className="caja_info">
        //                 <div className='boton_izquierda'>
        //                     <button className='boton_menos'>-</button>
        //                 </div>
        //                 <div className='boton_derecha'>
        //                     <button className='boton_mas' onClick={()=>setCuenta(prev => {prev + 1})}>+</button>
        //                 </div>
        //                 <div className='cuenta'>
        //                     <p className='dato'>{cuenta}</p>
        //                 </div>
        //             </div>

        //         </Card>
        //     </SimpleGrid>
        // </div>
    )
}
export default Democarta;
