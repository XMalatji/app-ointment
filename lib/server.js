import express from 'express';
import config from './config';
import serverRender from './serverRender';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');


const initialContent = serverRender();

app.get('/', (req,res) =>{
  res.render('index', { initialContent}); //pass variables to template ejs
});

app.listen(config.port, function listenHandler(){
  console.info(`Surfingg on ${config.port}`);
});