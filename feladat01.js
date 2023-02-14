document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("atalakito").addEventListener("click", atalakit);
});
function atalakit() {
  const atalakitas = document.forms["atalakitas"]
  const beviteli = atalakitas["beviteli"].value;
  const valaszto = atalakitas["valaszto"];
  if (valaszto.value == "nagybetu") {
    document.getElementById("visszaJelzes").innerHTML = beviteli.toString().toUpperCase();
  }  
  else if (valaszto.value == "kisbetu") {
    document.getElementById("visszaJelzes").innerHTML = beviteli.toString().toLowerCase();
  }
  else {
    document.getElementById("visszaJelzes").innerHTML = "szöveg";
  }
  const megvan = {
      beviteli: beviteli,
      valaszto: valaszto.value,
  };
  console.log(megvan);
}
