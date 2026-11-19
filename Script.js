function visaHalsning() {
    let halsningar= [
        "Visby",
        "Roma",
        "Gothem",
        "Hejdeby",
        "Follingbo",
        "Klinte",
        "Rute",
        "Vänge",
        "Väskinde",
        "Fårö",
    ];

    let slump= Math.floor(Math.random()*halsningar.length)
    document.getElementById("halsning").innerHTML=halsningar[slump]
}