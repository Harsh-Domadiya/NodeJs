const fs = require('fs');
const express = require('express');
const app = express();

app.get("/", function (req, res) {

    const data = fs.readFileSync('product.json');
    res.send(JSON.parse(data))

});
app.get('/products/:id', (req, res) => {

    const id = Number(req.params.id);

    const data = JSON.parse(fs.readFileSync('product.json'));

    const response = data.filter(item => item.id === id);

    if (response.length) {
        res.send(response)
    } else {
        res.send("Data not..")
    }
})


app.listen(9000, () => {
    console.log(`http://localhost:9000/`);
});