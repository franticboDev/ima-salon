const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");  

cookieButton.addEventListener("click", () => {
    cookieContainer.classList.remove("active");
    localStorage.setItem("cookieBannerDisplayed", "true");
    Cookies.set('IMA-Copyright', 'true');
});
 
setTimeout(() => {
    if(!localStorage.getItem("cookieBannerDisplayed"))
        cookieContainer.classList.add("active"); 
}, 2000);

//Cookies

Cookies.set('Domain', { domain: 'InfinityMichelleArt.com' });   