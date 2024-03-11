const localcountry = new URLSearchParams(window.location.search).get('name');
console.log(localcountry);

const counte = document.querySelector('.country-container');

if (localcountry) {
    fetch(`https://restcountries.com/v3.1/name/${localcountry}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        const countryData = data[0];
        counte.innerHTML += `
            <div class="flag">
                <img src="${countryData.flags.svg}" alt="" />
                <div class="countries-detail">
                    <h1>${countryData.name.common}</h1>
                    <div class="css">
                        <p><b>Native name:</b> ${countryData.altSpellings[1] || 'Not available'}</p>
                        <p><b>Population:</b> ${countryData.population.toLocaleString('en-IN')}</p>
                        <p><b>Region:</b> ${countryData.region}</p>
                        <p><b>Sub-region:</b> ${countryData.subregion}</p>
                        <p><b>Capital:</b> ${countryData.capital}</p>
                        <p><b>Top Domain Level:</b> ${countryData.topLevelDomain}</p>
                        <p><b>Currencies:</b> ${countryData.currencies.name}</p>
                        <p><b>Languages:</b> ${Object.values(countryData.languages).join(', ')}</p>
                    </div>
                    <div class="border_countries">
                        <span><b>Border-countries</b></span>
                        ${countryData.borders.map(border => `<a href="">${border}</a>`).join('')}
                    </div>
                </div>
            </div>`;
    })
    .catch(error => console.error('Error fetching data:', error));
} else {
    console.error('No country name provided in the URL');
}
