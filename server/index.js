require('dotenv').config();
const bodyParser = require("body-parser")
const express = require("express")
const nodemailer = require("nodemailer")
const sendGridTransport = require("nodemailer-sendgrid-transport")
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
// Step 1
// console.log('process.env', process.env)
let transporter = nodemailer.createTransport(sendGridTransport(
    {
        auth: {
            api_key: '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'
        }
    }
));

// app.post('/contact', function (req, res) {
//     let mailOptions = {
//         to: 'cadetwhocode@gmail.com',
//         cc: '',
//         subject: 'Query from Loonum website',
//         html: req.body.html
//     };
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             res.send("EMAIL FAILED");
//         }
//         res.send("EMAIL SENT SUCCESSFULLY");
//     });
// });
app.post('/reply', function (req, res) {
    console.log(req.body.email)
    if (!req.body.email) {
        return res.status(400).json({
            status: 'error',
            error: 'req body cannot be empty',
        });
    }
    let mailOptions = {
        to: 'cadetwhocode@gmail.com',
        from: 'cadetwhocode@gmail.com',
        subject: 'Query from Loonum website',
        text: `Please reach out to me. My Email address is ${req.body.email}`
    };
    transporter.sendMail(mailOptions, (err, info) => {
        console.log(err)
        if (err) return res.status(500).send(err)
        res.json({ success: true })
    });
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server started at http://localhost:%s", port);
});


