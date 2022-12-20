// b6817cc43a9c9995d8d6666a20aa9349
//2bf99bd5e8dd9fbeaea673948183fbf9

const Mailjet = require('node-mailjet')

const sendMail = (email, name) => {
  const mailjet = Mailjet.apiConnect(
    'b6817cc43a9c9995d8d6666a20aa9349',
    '2bf99bd5e8dd9fbeaea673948183fbf9',
  );
  const request = mailjet
    .post('send', { version: 'v3.1' })
    .request({
      Messages: [
        {
          From: {
            Email: "noreply@momodealer.com",
            Name: "Momo Dealer"
          },
          To: [
            {
              Email: `${email}`,
              Name: `${name}`
            }
          ],
          Subject: "Momo Dealer (Application)",
          TextPart: `Dear ${name}, welcome to Momo Dealers! You application has been received successfully.`,
          HTMLPart: "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
        }
      ]
    })
  request
    .then((result) => {
      console.log(result.body)
    })
    .catch((err) => {
      console.log(err.statusCode)
    })
}


sendMail("kumardeepakbabu@gmail.com", "Deepka")


// export default sendMail