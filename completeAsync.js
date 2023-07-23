const getDataFromForm = () => {
  const requestObj = {
    firstName: "Bruce",
    lastName: "Lee",
    categories: ["nerdy"],
  };
  return requestObj;
};

const buildRequestUrl = (requestData) => {
  return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}
            &lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
};

const requestJoke = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  postJoketoPage(jsonResponse.value.joke);
};

const postJoke = (joke) => {
  console.log(joke);
};

const proceduralJoke = async () => {
  const requestedData = getDataFromForm();
  const requestedUrl = buildRequestUrl(requestedData);
  const joke = requestJoke(requestedUrl);
};

proceduralJoke();
