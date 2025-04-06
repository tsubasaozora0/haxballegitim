document.addEventListener("DOMContentLoaded", function() {
    const haberlerDiv = document.getElementById("haberler");

    const haberler = [
        { baslik: "Galatasaray Şampiyon Oldu!", icerik: "Galatasaray bu sezonun şampiyonu oldu..." },
        { baslik: "Fenerbahçe Transfer Bombası!", icerik: "Fenerbahçe yeni yıldızını duyurdu..." }
    ];

    haberler.forEach(haber => {
        let haberElement = document.createElement("div");
        haberElement.innerHTML = `<h2>${haber.baslik}</h2><p>${haber.icerik}</p>`;
        haberlerDiv.appendChild(haberElement);
    });
});
