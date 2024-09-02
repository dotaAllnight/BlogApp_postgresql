const express = require('express')
const app = express()
const port = 3000;
const client = require("./db/conn");

app.use(express.json());


app.get('/', (req, res) => {
    res.json({ 'Message': 'Hello word!' })
})

app.get('/blog', async (req, res) => {
    try {
        const result = await client.query('SELECT * FROM blogs');
        // ส่งผลลัพธ์ทั้งหมด
        res.json({ "data": result.rows });
    } catch (err) {
        console.error('Error executing query', err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

/*
app.post('/blog', async (req, res) => {
    const result = await client.query('INSERT INTO blogs (title, image, post) VALUES ($1,$2,$3)', [
        req.body.title, req.body.image, req.body.post
    ]);
    res.json(result.rows);
})*/

app.post('/blog', async (req, res) => {
    try {
        const result = await client.query(
            'INSERT INTO blogs (title, image, post) VALUES ($1, $2, $3) RETURNING *', // ใช้ RETURNING * เพื่อให้ได้ข้อมูลที่ถูกแทรก
            [req.body.title, req.body.image, req.body.post]
        );
        res.status(201).json(result.rows[0]); // ส่งข้อมูลที่แทรกไปให้ client
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ error: 'An error occurred while inserting data' });
    }
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})