const express = require('express')
const nodemailer = require('nodemailer')

const app = express()
app.use(express.json())

app.post('/send-email', (req, res) => {
  const { email, phone } = req.body

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
  })

  const mailOptions = {
    to: process.env.RECIPIENT_EMAIL,
    subject: 'Новое сообщение',
    text: `Номер телефона: ${phone}\\nEmail: ${email}`,
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.status(500).send('Произошла ошибка при отправке сообщения')
    } else {
      res.status(200).send('Сообщение успешно отправлено')
    }
  })
})

app.listen(8000, () => {
  console.log('Сервер запущен на http://localhost:8000')
})
