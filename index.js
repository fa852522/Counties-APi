

fetchCountries();


async function fetchCountries() {
  const card = document.querySelector(".card-container");
  
  try {
    const response = await fetch("https://restcountries.com/v2/all");
    const data = await response.json();
    
    const cardsHTML = data
      .filter(country => country.population).sort((a,b)=>b.population-a.population)
      .map(country => `
        <a href="country.html?name=${country.name}" class="card">
          <img src="${country.flags.svg}" alt="#" />
          <div class="country">${country.name}</div>
          <p><b>Population:</b> ${country.population.toLocaleString('en-IN')}</p>
          <p><b>Region:</b> ${country.region}</p>
          <p><b>Capital:</b> ${country.capital}</p>
        </a>`
      )
      .join("");
    
    card.innerHTML = cardsHTML;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}





const filter = document.querySelector('.filter');
filter.addEventListener("change",async()=>{
   const valuef = filter.value;
   const card = document.querySelector(".card-container");
  
   try {
     const response = await fetch(`https://restcountries.com/v3.1/region/${valuef}`);
     const data = await response.json();
    console.log(data);
     const cardsHTML = data.sort((a,b)=>b.population-a.population)
       .map(country => `
         <a href="country.html?name=${country.name}" class="card">
           <img src="${country.flags.svg}" alt="#" />
           <div class="country">${country.name.common}</div>
           <p><b>Population:</b> ${country.population.toLocaleString('en-IN')}</p>
           <p><b>Region:</b> ${country.region}</p>
           <p><b>Capital:</b> ${country.capital}</p>
         </a>`
       )
       .join("");
     
     card.innerHTML = cardsHTML;
   } catch (error) {
     console.error("Error fetching data:", error);
   }
})

const search = document.querySelector('#sw')

search.addEventListener("input",async(e)=>{
   const Sname=e.target.value;
   const card = document.querySelector(".card-container");
  
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${Sname}`);
    const data = await response.json();
    console.log(data);
    const cardsHTML = data
      .map(country => `
        <a href="country.html?name=${country.name.common}" class="card">
          <img src="${country.flags.svg}" alt="#" />
          <div class="country">${country.name.common}</div>
          <p><b>Population:</b> ${country.population.toLocaleString('en-IN')}</p>
          <p><b>Region:</b> ${country.region}</p>
          <p><b>Capital:</b> ${country.capital}</p>
        </a>`
      )
      .join("");
    
    card.innerHTML = cardsHTML;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
})




const mode = document.querySelector('.mode');
const country = document.querySelector(".country");
const cp = document.querySelector(".card p");

mode.addEventListener("click", getOtp )


function getOtp(){
  let num = 'ABCDEFGabcdefg';
  let a = "#";

  for(let i = 0;i<6;i++){
    a += num[Math.floor(Math.random()*10)];
  }
  

  country.style.color=a;
}


window.addEventListener("scroll",(e)=>{
   console.log(e.screenY);
})

