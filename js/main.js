// navbar
const toggleCheck = document.getElementById("check");
const nav = document.querySelector("nav ul");
const liNav = nav.querySelectorAll("li");

toggleCheck.addEventListener("click", function () {
  nav.classList.toggle("active");
});

liNav.forEach(function (li) {
  li.addEventListener("click", function () {
    nav.classList.remove("active");
  });
});

// home
const htgLuas = document.getElementById("pHtgLuas");
const htgKeliling = document.getElementById("pHtgKlg");
const container = document.getElementById("container");
const content = document.getElementById("content");
const content2 = document.getElementById("content2");
const home = document.getElementById("home");

htgLuas.addEventListener("click", () => {
  content.style.display = "flex";
  container.style.display = "none";
  content2.style.display = "none";
});
htgKeliling.addEventListener("click", () => {
  content2.style.display = "flex";
  container.style.display = "none";
  content.style.display = "none";
});

home.addEventListener("click", () => {
  container.style.display = "flex";
  content.style.display = "none";
  content2.style.display = "none";
});

// hitungLuas

function hitungLuas() {
  let sisi = parseFloat(document.getElementById("sisiLuas").value);
  let luas = sisi * sisi;

  let rumusLuasElem = document.getElementById("rumusLuas");
  let hasilLuasElem = document.getElementById("jumlahLuas");

  rumusLuasElem.innerHTML = `L = ${sisi} x ${sisi}`;
  hasilLuasElem.innerHTML = `L = ${luas}`;

  rumusLuasElem.classList.add("show");
  hasilLuasElem.classList.add("show");
}

// hitung Keliling
function hitungKeliling() {
  let sisiKel = parseFloat(document.getElementById("sisiKeliling").value);

  let keliling = 4 * sisiKel;

  let rumusKel = document.getElementById("rumusKeliling");
  let hasilKel = document.getElementById("jumlahKeliling");

  rumusKel.innerHTML = `K = 4 x ${sisiKel}`;
  hasilKel.innerHTML = `K = ${keliling}`;

  rumusKel.classList.add("show");
  hasilKel.classList.add("show");
}
// reset
function reset() {
  let targetElement = [
    "sisiLuas",
    "rumusLuas",
    "jumlahLuas",
    "sisiKeliling",
    "rumusKeliling",
    "jumlahKeliling",
  ];

  targetElement.forEach(function (elementId) {
    let element = document.getElementById(elementId);
    if (element) {
      element.value = "";
      element.innerHTML = "";
      element.classList.remove("show");
    }
  });
}
