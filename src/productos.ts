import express from 'express';
const app = express()
var router = express.Router()

let productos : any [] = []

class NuevoProducto {
    id : number
    titulo : string
    precio : number
    imagen : string

    constructor(id:number, titulo:string, precio:number,imagen:string){
        this.id = id
        this.titulo = titulo
        this.precio = precio
        this.imagen = imagen
}

}



router.get('/productos', (req,res) => {
    productos.length < 0 ? res.sendStatus(404) : res.send(productos)
})

router.get('/agregarProductos', (req, res)=>{
    res.sendFile('formulario.html', {root: './public'})
})

router.get('/productos/:id',(req,res)=>{
    const id = req.params.id
    const producto = productos.find(producto => producto.id == id)
    producto ? res.json(producto) : res.sendStatus(404)
})

router.post('/productos',(req,res) =>{
    console.log(req.body)
    const {id,titulo, precio,imagen} = req.body
    const producto = new NuevoProducto(id,titulo,precio,imagen)
    producto.id = productos.length+1
    productos.push(producto)
    res.sendFile('formulario.html', {root: './public'})
    
})

router.put('/productos/:id',(req,res)=>{
    const id = req.params.id
    const producto = productos.find(producto => producto.id == id)
   if(!producto){
       res.sendStatus(404)
   }
   const{titulo,precio} = req.body
   producto.titulo = titulo
   producto.precio = precio
   res.sendStatus(204)

})

router.delete('/productos/:id',(req,res) =>{
    const id = req.params.id
    const producto = productos.find(producto => producto.id == id)
   if(!producto){
       res.sendStatus(404)
   }
   productos = productos.filter(producto=>producto.id != id)
   res.sendStatus(204)

})


module.exports = router