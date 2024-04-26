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
});
//
//
//
//
//
///
//

const urlParams = new URLSearchParams(window.location.search);
const slug = urlParams.get("slug");
const section = document.querySelector(".section");
console.log(section);

fetch(`https://frontend-mentor-apis-6efy.onrender.com/countries/${slug}`)
  .then((res) => res.json())
  .then((item) => {
    createItem(item);
  });

function createItem(item) {
  section.innerHTML = "";
  const li = document.createElement("li");
  li.classList.add("country");
  li.innerHTML = `<div class="abbox"><div class="abimg"><img class="abcardimg" src=${
    item.flags.svg
  } alt='${item.flags.svg}' /></div>
              <div class="abdetailsdesc">
            <div class="alldetails"> <div class="abdetails1"><p class="abcountryname">${
              item.name.common
            }</p><p class="abnatname"><span class="abblack">Native Name:</span><span >${
    item.name.nativeName
  }</span></p> <p class="abpopulation"><sapan class="abblack">Population:</sapan>${item.population.toLocaleString(
    "en-IN"
  )}</p>
              <p class="abregion"><span class="abblack">Region:</span>${
                item.region
              }</p><p class="absubregion"><span class="abblack">Sub Region:</span>${
    item.capital.subregion
  }</p>
              <p class="abcapital"><span class="abblack">Capital:</span>${
                item.capital
              }</p></div><div class="abdetails2"><p class="abtop"><span class="abblack">Top Level Domain:</span></p><p class="abcurrencies"><span class="abblack">Currencies:</span>${
    item.currencies
  }</p><p class="ablanguages"><span class="abblack">Languages:</span>${
    item.languages
  }</p></div></div><div class="abdetailes3"><p class="abbordercoun"><span class="abblack">Border Countries:</span><a>${
    item.borders.common
  } </a><a>${item.borders.common} </a><a>${
    item.borders.common
  } </a></p></div></div></div>`;
  section.appendChild(li);
}

/*fetch(`https://frontend-mentor-apis-6efy.onrender.com/countries?search=${slug}`)
  .then((res) => res.json())
  .then((data) => {
    createItem(data);
  });*/
/*https://frontend-mentor-apis-6efy.onrender.com/countries/[slug]*/
