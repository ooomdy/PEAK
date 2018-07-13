
var email = function(email,msg) {
nodemailer = require('nodemailer');

nodemailer.createTestAccount((err, account) => {
    // create a transporter object
    let transporter = nodemailer.createTransport({
      service: 'gmail',
        auth: {
            user: 'artinsoren@gmail.com',
            pass: 'MaxAria_karen+1396'
        }
    });

    // setup email data
    let mailOptions = {
        from: '"Reza"', // sender address
        to: email, // list of receivers
        subject: 'Summer Intern Hackathon Project', // Subject line
        html: msg,
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent');
    });
});
};
module.exports = email;
