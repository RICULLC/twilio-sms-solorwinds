const express = require('express');
const twilio = require('twilio');

const app = express()
const port = process.env.PORT
var router = express.Router();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN; // Your Auth Token from www.twilio.com/console

const client = new twilio(accountSid, authToken);

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.post('/send_sms', (req, res) => {
    const { message, recipients } = req.body
    Promise.all(
        recipients.map(recipient => {
            client.messages
            .create({
                body: message,
                to: recipient, // Text this number
                from: process.env.TWILIO_NUMBER, // From a valid Twilio number
            })
        }))
    .then((message) => {
        console.log('message sent')
        res.send(message.sid)
    })
    .catch(err => {
        console.log(err)
        res.send(err.message)
    })  
})

app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})