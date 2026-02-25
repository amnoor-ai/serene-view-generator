const btnEl= document.getElementById("btn");
const sereneContainerEl = document.querySelector(".serene-container")
const sereneImgEl = document.querySelector(".serene-img")
const sereneNameEl = document.querySelector(".serene-name")

btnEl .addEventListener("click", async function(){
    try {
        btnEl.disabled = true;
        btnEl.innerText = "loading...";
        
        const response = await fetch(
            "https://api.unsplash.com/photos/random?query=nature&orientation=squarish&client_id=lGH0xPxtwH4tEVwqR0-5yuA0SmQr3r62LLtox4lRGwM"
        );

        const data = await response.json();

        sereneImgEl.src = data.urls.regular;
        sereneNameEl.innerText = data.alt_description || "serene Nature View";

        sereneContainerEl.style.display = "block";

    } catch (error) {
        console.log(error);
        sereneNameEl.innerText = "Something Went Wrong.";
    }

    btnEl.disabled = false;
    btnEl.innerText = "Get Serene Images";
});
console.log(sereneImgEl);
