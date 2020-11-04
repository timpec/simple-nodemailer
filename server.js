const express = require('express');
const cors = require('cors');
const app = express();
const sendMail = require('./mailer');

const PORT = 3000;

app.use(express.urlencoded({
    extended: false
}));
app.use(cors())
app.options('*', cors());
app.use(express.json());

app.post('/email', (req,res) => {
    console.log("Data: ", req.body)
    sendMail(req.body);
    res.json({message: 'Message received and sent'});
});

app.listen(PORT, () => {
    console.log('Server starting on port: ', PORT);
});