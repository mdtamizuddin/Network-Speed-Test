
const NetworkSpeed = require('network-speed');  // ES5
const testNetworkSpeed = new NetworkSpeed();
const app = require('express')()


app.get('/down', async (req, res) => {

    const baseUrl = 'https://eu.httpbin.org/stream-bytes/500000';
    const fileSizeInBytes = 500000;
    const speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSizeInBytes);

    res.send(speed)

})
app.get('/up', async (req, res) => {

    const options = {
        hostname: 'www.google.com',
        port: 80,
        path: '/catchers/544b09b4599c1d0200000289',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const fileSizeInBytes = 2000000
    const speed = await testNetworkSpeed.checkUploadSpeed(options, fileSizeInBytes);

    res.send(speed)

})

app.listen(3000, () => {
    console.log('server is Running')
})