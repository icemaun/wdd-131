document.addEventListener("DOMContentLoaded", function() {
    fetch('http://localhost:3000/api/about')
        .then(response => response.text())
        .then(data => {
            const aboutInfo = document.querySelector('.home-title');
            if (aboutInfo) {
                aboutInfo.innerText = data;
            }
        })
        .catch(error => {
            console.error('Error fetching About:', error);
        });

    fetch('http://localhost:3000/api/operations')
        .then(response => response.text())
        .then(data => {
            const operationsInfo = document.getElementById('operations-info');
            if (operationsInfo) {
                operationsInfo.innerText = data;
            }
        })
        .catch(error => {
            console.error('Error fetching Operations:', error);
        });

    fetch('http://localhost:3000/api/whywork')
        .then(response => response.text())
        .then(data => {
            const whyWorkInfo = document.getElementById('why-work-info');
            if (whyWorkInfo) {
                whyWorkInfo.innerText = data;
            }
        })
        .catch(error => {
            console.error('Error fetching Why Work:', error);
        });
});

const express = require('express');
const app = express();

app.get('/api/about', (req, res) => {
    res.send('About Hulma Pottery');
});

app.get('/api/operations', (req, res) => {
    res.send('Information about operations');
});

app.get('/api/whywork', (req, res) => {
    res.send('Why work for Hulma Pottery?');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});