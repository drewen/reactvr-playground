const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()
const port = 3001

const getStatus = async (url) => {
  const startTime = Date.now()
  const response = await axios.get(url);
  const endTime = Date.now()
  return {
    url,
    status: response.status,
    timestamp: (new Date(startTime)).toISOString(),
    responseTime: endTime-startTime
  }
};

app.use(cors())

app.get('/google', async (req, res) => {
  try {
    const data = await getStatus('https://google.com')
    res.send(data)
  } catch (e) {
    res.send(e)
  }
})

app.get('/amazon', async (req, res) => {
  try {
    const data = await getStatus('https://amazon.com')
    res.send(data)
  } catch (e) {
    res.send(e)
  }
})

app.get('/all', async (req, res) => {
  try {
    const amazon = await getStatus('https://amazon.com')
    const google = await getStatus('https://google.com')
    res.send([amazon, google])
  } catch (e) {
    res.send(e)
  }
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})