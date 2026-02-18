import express from "express"
import "dotenv/config"
const app = express()
const port = process.env.PORT

app.get('/healthcheck', (req, res) => {
  res.send({
    success : true,
    message : "Api is working"
  })
})

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`)
})
