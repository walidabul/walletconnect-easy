const express = require('express');
const path = require('path');
const app = express()
const port = 3000

app.use('/walletconnect-easy', express.static(path.join(__dirname, 'index.html')));
app.listen(port, () => {
    console.log(`Express listening on port ${port}`)
})