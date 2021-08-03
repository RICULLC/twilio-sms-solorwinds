const express = require('express');
const twilio = require('twilio');

const app = express()
const port = process.env.PORT


const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN; // Your Auth Token from www.twilio.com/console

const client = new twilio(accountSid, authToken);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/send_sms', (req, res) => {
    client.messages
    .create({
        body: 'Hello from Node',
        to: '+918892538433', // Text this number
        from: process.env.TWILIO_NUMBER, // From a valid Twilio number
    })
    .then((message) => res.send(message.sid))
    .catch(err => {
        console.log(err)
        res.send(err.message)
    })  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})