//darkmode//
const darkmodeBtn = document.querySelector("#darkmodeBtn");
const darkmodeImg = document.querySelector("#darkmodeImg");
darkmodeBtn.addEventListener("click", () => {
  if (document.body.classList.contains("light")) {
    document.body.classList.remove("light");
    darkmodeBtn.lastChild.textContent = "Light mode";
    darkmodeImg.setAttribute("src", "./images/path.png");
  } else {
    document.body.classList.add("light");
    darkmodeBtn.lastChild.textContent = "Dark mode";
    darkmodeImg.setAttribute("src", "./images/path(1).png");
  }
  localStorage.setItem("PageTheme", JSON.stringify(darkmodeBtn));
});
const listItem = document.querySelector(".listitem");
const loader = document.querySelector(".loader");
const input = document.getElementById("input");
loader.classList.remove("hidden");

function createCountries(data) {
  listItem.innerHTML = "";
  data.data.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("country");
    li.innerHTML = `<img class="cardimg" src=${item.flags.svg} alt='${
      item.flags.svg
    }' />
              <a  href="./about.html?slug${
                item.name.slug
              }" class="aboutjs"><p class="countryname">${
      item.name.common
    }</p></a>
             <div class="details"> <p class="population"><sapan class="black">Population:</sapan>${item.population.toLocaleString(
               "en-IN"
             )}</p>
              <p class="region"><span class="black">Region:</span>${
                item.region
              }</p>
              <p class="capital"><span class="black">Capital:</span>${
                item.capital
              }</p></div>`;
    listItem.appendChild(li);
  });
}
fetch("https://frontend-mentor-apis-6efy.onrender.com/countries")
  .then((res) => res.json())
  .then((data) => {
    createCountries(data);
  });

function CreateUi(data, dataType) {
  listItem.innerHTML = "";
  data.data.forEach((item) => {
    let li = document.createElement("li");
    li.classList.add("list-item");
    switch (dataType) {
      case "data":
        li.innerHTML = `<img class="cardimg" src=${item.flags.svg} alt='${item.flags.svg}' />
              <a  href="./about.html?slug${item.name.slug}" class="aboutjs"><p class="countryname">${item.name.common}</p></a>
             <div class="details"> <p class="population"><sapan class="black">Population:</sapan>${item.population}</p>
              <p class="region"><span class="black">Region:</span>${item.region}</p>
              <p class="capital"><span class="black">Capital:</span>${item.capital}</p></div>`;
        break;
    }
  });
}
input.addEventListener("input", (e) => {
  getData("data");
  function getData(dataType) {
    fetch(
      `https://frontend-mentor-apis-6efy.onrender.com/countries?search=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => createCountries(data, dataType));
  }
});

/*const select = document.querySelector("#select");*/

select.addEventListener("change", (e) => {
  getData("data");
  function getData(dataType) {
    fetch(
      `https://frontend-mentor-apis-6efy.onrender.com/countries?region=${e.target.value}`
    )
      .then((response) => response.json())
      .then((data) => createCountries(data, dataType));
  }
});
/* const listItem = document.querySelector(".listitem");
const loader = document.querySelector(".loader");
const input = document.getElementById("input");
loader.classList.remove("hidden");

fetch("https://frontend-mentor-apis-6efy.onrender.com/countries")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.data);
  });

function createCountries(data) {
  listItem.innerHTML = "";
  data.forEach((country) => {
    const li = document.createElement("li");
    li.classList.add("country");
    li.innerHTML = `<img src=${country.flags} alt='${country.flags}' />
              <p>${country.name}</p>
              <p>${country.population}</p>
              <p>${country.region}</p>
              <p>${country.capital}</p>`;
    listItem.appendChild(li);
  });
}

input.addEventListener("input", (e) => {
  getData();
});

function getData() {
  fetch(
    `https://frontend-mentor-apis-6efy.onrender.com/countries?search=${input.value}`
  )
    .then((res) => res.json())
    .then((data) => createCountries(data));
}
*/
