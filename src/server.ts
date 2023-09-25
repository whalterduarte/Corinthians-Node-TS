import express, { Request, Response} from "express"
import path from "path"
import mustache from "mustache-express"
require('dotenv').config()

const app = express()
const port = process.env.PORT

//Rotas
import mainRouter from './router/index'

//Usando as rotas
app.use(mainRouter)

// Template engine MUSTACHE
app.set ('view engine', 'mustache'); 
app.set ('views', path.join(__dirname, 'views')); 
app.engine('mustache', mustache());

//Configurando a pasta Public
app.use(express.static(path.join(__dirname, '../public')));

 //Pagina não encontrada
 app.use((req, res)=>{
  res.send('Página não encontrada');
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))