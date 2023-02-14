document.addEventListener("DOMContentLoaded",() => {
    document.getElementById("gomb").addEventListener('click', regisztracio);
});

function regisztracio() {
    const regisztracios = document.forms["regisztracios_urlap"];
    const felhasznalo = regisztracios["felhasznalo"].value;
    const email = regisztracios["email"].value;
    const jelszo = regisztracios["jelszo"].value;
    const jelszoUjra = regisztracios["jelszoUjra"].value;
    const szuletesi = regisztracios["szuletesi_ido"].value;

    let elfogadva = true;
    if (!(felhasznalo.length >= 5) || !(felhasznalo.length <= 16)) {
        alert("A megadott felhasználó névnek 5-16 karakter hosszúnak kell lennie!")
        elfogadva = false
    }
    if (jelszo.length<5) {
        alert("A megadott jelszónak minimum 5 karakter hosszúnak kell lennie!")
        elfogadva = false
    }
    if (jelszo != jelszoUjra){
        alert("A megadott jelszóknak eggyezniük kell!")
        elfogadva = false
    }
    if (elfogadva) {
        const regisztracios_adatok = {
            felhasznalo: felhasznalo,
            email: email,
            jelszo: jelszo,
            jelszoUjra: jelszoUjra,
            szuletesi: szuletesi
        };
        console.log(regisztracios_adatok);
    }

}