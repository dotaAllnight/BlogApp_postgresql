const express = require('express')
const app = express()
const port = 3000;
const client = require("./db/conn");
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));


const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}.${file.originalname}`)
    }
})
const upload = multer({ storage: storage })


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



app.post('/blog', async (req, res) => {
    const result = await client.query('INSERT INTO blogs (title, image, post, category) VALUES ($1,$2,$3,$4)', [
        req.body.title, req.body.image, req.body.post, req.body.category
    ]);
    res.json({ "message": "Added new blog", "desc": result.rowCount });
});

app.post('/blogimage', upload.single('file'), function (req, res, next) {
    res.json(req.file);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})