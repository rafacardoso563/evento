const express = require("express");
const cors = require("cors");
const port = 3002;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(port, ()=> console.log ("Rodando na porta " + port));

const connection = require('./connection.js');

// hello world

app.get('/', (req, res) => {
    console.log("Hello, world");
});


// cadastrar eventos 

app.post('/eventos', (req, res) => {
    const { nome, dia , locall, descricao } = req.body;
    const query = 'INSERT INTO eventos (nome, dia , locall, descricao) VALUES(?, ?, ?, ?)';
    
    connection.query(query, [nome, dia , locall, descricao], (err, result) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Erro ao cadastrar evento' });
        }
        res.json({ success: true, message: "Evento cadastrado com sucesso"});
    });
});

// editar evento 

app.get('/eventosListar', (req, res) => {
    const query = 'SELECT * FROM eventos';
    connection.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Erro' });
        }
        res.json({ success: true, data: results });
    });
});


app.put('/eventos/:id', (req, res) =>{
    const {id} = req.params
    const {nome, dia, locall, descricao} = req.body
    const query = 'UPDATE eventos SET nome = ?, dia = ?, locall = ?, descricao = ? WHERE id = ?'
    connection.query(query, [nome, dia, locall, descricao, id], (err) =>{
        if(err){
            return res.status(500).json({success: false, message: 'Erro ao atualizar evento'})
        }
        res.json({success: true, message: "Evento atualizado"})
    })
})

// deletar evento

app.delete('/eventos/:id', (req, res) =>{
    const {id} = req.params
    const query = 'DELETE FROM eventos WHERE id = ?'
    connection.query(query, [id], (err) =>{
        if(err){
            return res.status(500).json({success: false, message: 'Erro ao deletar evento'})
        }
        res.json({success: true, message: "evento deletado"})
    })
})
