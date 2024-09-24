const express = require('express');
const path = require('node:path');

const app = express();

let listaEmails = [];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/cadastrar', (req, res) => {
    const email = req.body.email;
    if(email){
        listaEmails.push(email);
        res.redirect('/sucesso');
    }
})

app.get('/sucesso', (req, res) => res.render('sucesso'));
app.get('/emails', (req, res) => res.render('emails', { emails: listaEmails }));

app.post('/emails/delete', (req, res) => {
    const emailDeletado = req.body.email;
    listaEmails = listaEmails.filter(email => email != emailDeletado);
    res.redirect('/emails');
});

const PORT = 3000;

app.listen(PORT, () => console.log("Servidor rodando em http://localhost:"+PORT));