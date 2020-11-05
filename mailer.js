require('dotenv').config()
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SENDER_USER,
        pass: process.env.SENDER_PASS
    }
});

const sendMail = (data, cb) => {
    const buildTextTitle = "New safety issue reported: "+data.title+"\n";
    const buildTextCategory = "Category: "+data.category+"\n";
    const buildTextPriority = "Priority: "+data.priority+"%\n";
    const buildTextDescription = "Description:"+"\n"+data.description;
    let mailOptions = {
        from: process.env.SENDER_USER,
        to: process.env.RECEIVER_USER,
        subject: 'New safety issue: '+ data.title,
        text: buildTextTitle+buildTextCategory+buildTextPriority+buildTextDescription
    };
        
    transporter.sendMail(mailOptions, (err, data) => {
        if(err) {
            console.log("Error: ",err)
            //cb(err, null)
        } else {
            console.log(data)
            //cb(null,data)
        }
    })
}

module.exports = sendMail;
