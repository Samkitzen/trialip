const express = require('express')
const app = express()

app.get('/', (req, res) => {
    const ipAddress = req.socket.remoteAddress;
    res.send(ipAddress);
})


app.listen(process.env.PORT, () => console.log(`Server is listening on port 3000`))