const express = require('express');
const path = require('path');
const app = express();

// Statik dosyaları (HTML, CSS, JS, resim, video vb.) sunmak için
app.use(express.static(path.join(__dirname, 'public')));

// Ana sayfa
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'haxball.html'));
});

// Port ayarı
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT} üzerinde çalışıyor`);
});
