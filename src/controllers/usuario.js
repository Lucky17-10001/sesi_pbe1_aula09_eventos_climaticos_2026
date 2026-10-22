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

const atualizar = (req, res) => {
    const { id } = req.params
    const { nome, email, senha } = req.body
    
    const query = 'UPDATE usuario SET nome = ?, email = ?, senha = password(?) WHERE id = ?;'
    
    con.query(query, [nome, email, senha, id], (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao atualizar' })
        } else {
            res.json({ message: 'Atualizado com sucesso' })
        }
    })
}

const excluir = (req, res) => {
    const { id } = req.params

    const queryEventos = 'DELETE FROM evento WHERE usuarioId = ?;'
    
    con.query(queryEventos, [id], (errEventos) => {
        if (errEventos) {
            console.error(errEventos)
            return res.status(500).json({ error: 'Erro ao apagar eventos do usuário' })
        }

        const queryUsuario = 'DELETE FROM usuario WHERE id = ?;'
        
        con.query(queryUsuario, [id], (errUsuario, results) => {
            if (errUsuario) {
                console.error(errUsuario)
                return res.status(500).json({ error: 'Erro ao excluir usuário' })
            } else {
                res.json({ message: 'Usuário e seus eventos excluídos com sucesso' })
            }
        })
    })
}

const login = (req, res) => {
    const { email, senha } = req.body

    const query = 'SELECT id, nome, email FROM usuario WHERE email = ? AND senha = password(?);'

    con.query(query, [email, senha], (err, results) => {
        if (err) {
            console.error(err)
            res.status(500).json({ error: 'Erro ao tentar fazer login' })
        } else if (results.length === 0) {
            res.status(404).json({ error: 'erro 404: Usuário não encontrado ou credenciais inválidas' })
        } else {
            res.json({ message: 'Login realizado com sucesso', usuario: results[0] })
        }
    })
}

module.exports = {
    cadastrar,
    listar,
    atualizar,
    excluir,
    login
}