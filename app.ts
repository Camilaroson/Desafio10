import express from 'express';
const app = express()
var router = express.Router()
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + 'public'));

//cargo modulo handlebars 
import handlebars from 'express-handlebars'

//configuracion handle

app.engine (
    "hbs",
    handlebars({
        extname: ".hbs",
        defaultLayout: 'index.hbs',
        layoutsDir: __dirname + "/views/layouts",
        partialsDir: __dirname + '/views/partials/'
    })

)

app.set("view engine","hbs")
app.set("views","./views")
app.use(express.static("public"))

app.use('/api', require('./productos'))





app.listen(8080 , () =>{
    console.log('Servidor listo!')
})