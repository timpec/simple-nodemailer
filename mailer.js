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
    var mailOptions;
    if (data.type == "new-issue") {
        const buildTextTitle = "NEW safety issue reported: "+data.title+"\n";
    const buildTextCategory = "Category: "+data.category+"\n";
    const buildTextPriority = "Priority: "+data.priority+"%\n";
    const buildTextDescription = "Description:"+"\n"+data.description;
    mailOptions = {
        from: process.env.SENDER_USER,
        to: process.env.RECEIVER_USER,
        subject: 'NEW safety issue: '+ data.title,
        text: buildTextTitle+buildTextCategory+buildTextPriority+buildTextDescription
    };
    } else if (data.type == "resolve-issue") {
        const buildTextTitle = "Safety issue: "+data.title+" RESOLVED"+"\n";
        //const buildTextCategory = "Category: "+data.category+"\n";
        //const buildTextPriority = "Priority: "+data.priority+"%\n";
        //const buildTextDescription = "Description:"+"\n"+data.description;
        mailOptions = {
            from: process.env.SENDER_USER,
            to: process.env.RECEIVER_USER,
            subject: 'Safety issue RESOLVED: '+ data.title,
            text: buildTextTitle//+buildTextCategory+buildTextPriority+buildTextDescription
    };
    }
        
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
