const con = require('../db')

const cadastrar = (req, res) => {
    const { nome, email, senha } = req.body
    const query = 'INSERT INTO usuario (nome, email, senha) values (?, ?, password(?));'
    con.query(query, [nome, email, senha], (err, results) => {
        if (err) {
            console.error(err)
            res.status(500).json({ error: 'Erro ao cadastrar usuário' })
        } else {
            res.status(201).json({ message: 'Usuário cadastrado com sucesso', results})
        }
    })
}

const listar =  (req, res)=>{
    const query = 'SELECT * FROM usuario;'
    con.query(query, (err, results) =>{
        if (err) {
            console.error(err)
            res.status(500).json({ error: 'Erro ao buscar usuários' })
        } else{
            res.json(results)
        }
    })
}

module.exports = {
    cadastrar,
    listar
}