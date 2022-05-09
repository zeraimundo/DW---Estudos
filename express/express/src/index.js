import express from 'express'; 
import morgan from 'morgan';
import 'express-async-errors';

const app = express();

app.use(morgan('tiny'));
app.use(express.json());

// Query Param
// /hello/en?name=Luiz
app.get('/hello/en', (req, res) => {
  const name = req.query.name;
  res.json({ 
    message: `Hello, ${name}!` 
  });
});

//  Router Param
// /hello/en/Luiz
app.get('/hello/pt/:name', (req, res) => {
  const name = req.params.name;
  res.json({ 
    message: `Olá, ${name}!`
  });
});

// Body Param
// /hello/es
// { name: 'Luiz' }
app.post('/hello/es', (req, res) => {
  const name = req.body.name;
  res.json({ 
    message: `Holla, ${name}!`
  });
});


app.use((req, res, next) => {
  res.status(404).json({
    error: 'Content not found'
  })
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error on Server')
});

app.listen(3000, () => console.log('Server is running'));