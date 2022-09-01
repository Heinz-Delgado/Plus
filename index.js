const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.use(require('./routes/routes'))

app.listen(PORT, () => {
    console.log(`Servidor se encuentra en //http://localhost:${PORT}`);
});