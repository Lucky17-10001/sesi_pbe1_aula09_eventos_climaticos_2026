const con = require('../db')

const cadastrar = (req, res) => {
    const { usuarioId, cidade, tipoEvento, temperaturaMaxima, data, nivelImpacto } = req.body
    const query = 'INSERT INTO evento (usuarioId, cidade, tipoEvento, temperaturaMaxima, data, nivelImpacto) values (?, ?, ?, ?, ?, ?);'
    con.query(query, [usuarioId, cidade, tipoEvento, temperaturaMaxima, data, nivelImpacto], (err, results) => {
        if (err) {
            console.error(err)
            res.status(500).json({ error: 'Erro ao cadastrar evento' })
        } else {
            res.status(201).json({ message: 'Evento cadastrado com sucesso', results})
        }
    })
}

const listar =  (req, res)=>{
    const query = 'SELECT * FROM evento;'
    con.query(query, (err, results) =>{
        if (err) {
            console.error(err)
            res.status(500).json({ error: 'Erro ao buscar eventos' })
        } else{
            res.json(results)
        }
    })
}

const atualizar = (req, res) => {
    const { id } = req.params
    const { usuarioId, cidade, tipoEvento, temperaturaMaxima, data, nivelImpacto } = req.body
    
    const query = 'UPDATE evento SET usuarioId = ?, cidade = ?, tipoEvento = ?, temperaturaMaxima = ?, data = ?, nivelImpacto = ? WHERE id = ?;'
    
    con.query(query, [usuarioId, cidade, tipoEvento, temperaturaMaxima, data, nivelImpacto, id], (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Erro ao atualizar' })
        } else {
            res.json({ message: 'Atualizado com sucesso' })
        }
    })
}

const excluir = (req, res) => {
    const { id } = req.params

    const query = 'DELETE FROM evento WHERE id = ?;'

    con.query(query, [id], (err, results) => {
        if (err) {
            console.error(err)
            res.status(500).json({ error: 'Erro ao excluir evento' })
        } else {
            res.json({ message: 'Evento excluído com sucesso' })
        }
    })
}

const resumo = (req, res) => {
    const query = `
        SELECT *, 
        (SELECT AVG(temperaturaMaxima) FROM evento) AS mediaTemperatura 
        FROM evento;
    `

    con.query(query, (err, results) => {
        if (err) {
            console.error(err)
            res.status(500).json({ error: 'Erro ao gerar resumo dos eventos' })
        } else {
            const media = results.length > 0 ? results[0].mediaTemperatura : 0
            
            res.json({
                totalEventos: results.length,
                mediaTemperaturaGeral: Number(media).toFixed(2),
                eventos: results
            })
        }
    })
}
module.exports = {
    cadastrar,
    listar,
    atualizar,
    excluir,
    resumo
}