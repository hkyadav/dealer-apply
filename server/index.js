const app = require("express")()
const sendMail = require("./mail")

app.get("/api", (req, res) => {
  res.json({ message: "api is working" })
})

/*
name: 
ddd dd
phone: 
9797987987
email: 
sdf@ga.com
investment: 
10-15 Lakh
state: 
Bihar
address: 
shop addressssss
pincode: 
800002
agree: 
1
*/
app.post("/submit-request/", (req, res) => {
  const name = res.body.name
  const phone = res.body.phone
  const email = res.body.email
  const investment = res.body.investment
  const state = res.body.state
  const address = res.body.address
  const pincode = res.body.pincode
  const agree = res.body.agree
  const response = sendMail(email, name)

})
app.listen(3000, () => {
  console.log("listening")
})