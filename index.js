const express = require('express');
const multer = require('multer');
const fs = require('node:fs');

const upload = multer({dest: 'uploads/'});

const app = express();

app.post('/images/single', upload.single('imagenPerfil'), (req, res) =>{
    console.log(req.file);
    saveImage(req.file);
    res.send('Termina');
});



function saveImage(file){
    const newPath = `./uploads/${file.originalname}`
    fs.renameSync(file.path, newPath);
    return newPath;
}


app.listen(3000, () => {
    console.log('Servidor escuchando en puerto 3000');
});