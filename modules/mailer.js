const nodemailer = require("nodemailer")

const mailer={}

mailer.send = async function send(destinatario) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'proyectoyana@gmail.com', // generated ethereal user
      pass: 'Fullstack#01', // generated ethereal password
    },
  })

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Encrypt app" <foo@example.com>', // sender address
    to: destinatario, // list of receivers
    subject: "Clave de encriptación", // Subject line
    text: "Estos son sus datos", // plain text body
    html: "<h1>Su clave de encriptación es...</h1>"
  })

  console.log(info)
}

module.exports=mailer
