const btnElement = document.getElementById("btn");
const jokeElement = document.getElementById("joke");
btnElement.addEventListener("click", getJoke);

const apiKey = "CYNNRpNgevskP1rDCP8GbA==A5omHRdNkl253n3U";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jokeElement.innerText = "updating...";
    btnElement.disabled = true;
    btnElement.innerText = "Loading...";

    const response = await fetch(apiURL, options);
    const data = await response.json();
    jokeElement.innerText = data[0].joke;

    btnElement.disabled = false;
    btnElement.innerText = "Tell me a joke";
  } catch (error) {
    console.log(error);
  }
}
