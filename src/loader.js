function loadLoader(load) {
    let loaderContainer = document.querySelector(".loader-contianer");
    let spinner = document.querySelector(".spinner-div");
    loaderContainer.classList.toggle("loader");
    spinner.classList.toggle("spinner");
}
export default loadLoader;