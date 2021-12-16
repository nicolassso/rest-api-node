const { Router } = require('express')
const router = Router()

//get data from db
router.get('/', (req, res) => {
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM cuadros_db', (err, rows) => {
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

//post data into db
router.post('/', (req, res) => {
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO cuadros_db set ?', [req.body], (err, rows) => {
            if(err) return res.send(err)

            res.send('cuadro almacenado')
         })
    })
})

//delete data from db using ID
router.delete('/:id', (req, res) => {
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('DELETE FROM cuadros_db WHERE id = ?', [req.params.id], (err, rows) => {
            if(err) return res.send(err)

            res.send(`Se ha eliminado el cuadro ${req.params} con id = ${req.params.id}`)
        })
    })
})

//update data form db using ID
 router.put('/:id', (req, res) => {
     req.getConnection((err, conn)=>{
         if(err) return res.send(err)
         conn.query('UPDATE cuadros_db set ? WHERE id = ?', [req.body, req.params.id], (err, rows) => {
             if(err) return res.send(err)

             res.send('cuadro actualizado')
         })
     })
 })

module.exports = router