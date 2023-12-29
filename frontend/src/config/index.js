const environmentUrls = new Map();

//Check using window.location.hostname
//localhost is for local env
//For prod environment it will be different
//We are setting the backend with frontend here
environmentUrls.set("localhost", "http://localhost:8080");

//For prod set below
// environmentUrls.set('Your_React_host', 'Your_Backend_APi')

export default environmentUrls.get(window.location.hostname);
