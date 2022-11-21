async function APICategorias() { //Most compact way to return a fetch
    const response = await fetch('https://firestore.googleapis.com/v1/projects/ingenieria-software-database/databases/(default)/documents/categorias/?key=AIzaSyAnIiPySnVjK2sBjOLCy0uuNKMd3uNVO2U', {}); 
    const json = await response.json();
    return json.documents[0].fields.nombre.stringValue; //do here wathever with your json if you want to return
}	
async function APIProductos() { //Most compact way to return a fetch
    const response = await fetch('https://firestore.googleapis.com/v1/projects/ingenieria-software-database/databases/(default)/documents/productos/?key=AIzaSyAnIiPySnVjK2sBjOLCy0uuNKMd3uNVO2U', {}); 
    const json = await response.json();
    return json.documents[0].fields.nombre.stringValue; //do here wathever with your json if you want to return
}	
async function APISupermercados() { //Most compact way to return a fetch
    const response = await fetch('https://firestore.googleapis.com/v1/projects/ingenieria-software-database/databases/(default)/documents/supermercados/?key=AIzaSyAnIiPySnVjK2sBjOLCy0uuNKMd3uNVO2U', {}); 
    const json = await response.json();
    return json.documents[0].fields.nombre.stringValue; //do here wathever with your json if you want to return
}
async function APIUsuarios() { //Most compact way to return a fetch
    const response = await fetch('https://firestore.googleapis.com/v1/projects/ingenieria-software-database/databases/(default)/documents/usuarios/?key=AIzaSyAnIiPySnVjK2sBjOLCy0uuNKMd3uNVO2U', {}); 
    const json = await response.json();
    return json.documents[0].fields.nombre.stringValue; //do here wathever with your json if you want to return
}

describe('Pruebas de integracion', () => {

    beforeEach(async () => {
        respuestaCategoria     = await APICategorias();
        respuestaProductos     = await APIProductos();
        respuestaSupermercados = await APISupermercados();
        respuestaUsaurios      = await APIUsuarios();
    })

    it('Retorna el primer elemento de la base de datos de categorias:', () => {
      expect(respuestaCategoria).toBe("Granos basicos")
    })

    it('Retorna el primer elemento de la base de datos de productos:', () => {
        expect(respuestaProductos).toBe("Salchicha")
      })

    it('Retorna el primer elemento de la base de datos de supermercados:', () => {
    expect(respuestaSupermercados).toBe("La Torre")
    })

    it('Retorna el primer elemento de la base de datos de usuarios:', () => {
    expect(respuestaUsaurios).toBe("Jose Armas")
    })

})