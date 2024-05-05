import flags from "./svg";

function searchCountry() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();

    if (!searchTerm) {
        alert("Por favor, digite o nome do país que você procura.");
        return;
    }

    const countryName = countryFlags.getName(searchTerm);

    if (!countryName) {
        alert("País não encontrado. Tente novamente.");
        return;
    }

    const flagURL = countryFlags.getUrl(countryName);
    const countryElement = document.getElementById('country-name');

    document.getElementById('flag-image').src = flagURL;
    countryElement.textContent = countryName.toUpperCase();
}
