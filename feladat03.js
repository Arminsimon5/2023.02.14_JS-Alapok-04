document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("gomb").addEventListener('click', regisztracio);
    
});
function regisztracio() {
    const regisztracios = document.forms["regisztracios_urlap"];
    const nev = regisztracios["nev"].value;
    const email = regisztracios["email"].value;
    const jelszo = regisztracios["jelszo"].value;
    const telefonszam = regisztracios["telefonszam"].value;
    const nem = regisztracios_urlap["nem"].value;
    const szuletesi = regisztracios["szuletesi"].value;

    let elfogadva = true;
    if (nev.length == 0) {
        alert("Kötelező nevet megadni!")
        elfogadva = false
    }
    if (email.length == 0) {
        alert("Kötelező e-mailt megadni!")
        elfogadva = false
    }
    if (jelszo.length == 0) {
        alert("Kötelező jelszót megadni!")
        elfogadva = false
    }
    if (telefonszam.length == 0) {
        alert("Kötelező telefonszámot megadni!")
        elfogadva = false
    }
    if (nem.length == 0) {
        alert("Kötelező nemet megadni!")
        elfogadva = false
    }
    if (szuletesi.length == 0) {
        alert("Kötelező születési időt megadni!")
        elfogadva = false
    }
    if (elfogadva) {
        const regisztracios_adatok = {
            nev: nev,
            email: email,
            jelszo: jelszo,
            telefonszam: telefonszam,
            nem: nem,
            szuletesi: szuletesi,
        };
        console.log(regisztracios_adatok);
    }    
    
}