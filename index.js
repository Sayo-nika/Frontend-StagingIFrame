(function() {
    const loading = document.getElementsByClassName("loading")[0];
    const appIframe = document.querySelector("iframe");

    appIframe.addEventListener("loadend", function() {
        setTimeout(function () {
            loading.style.opacity = "0";

            setTimeout(function () {
                loading.style.display = "none";
            }, 750)
        }, 1000)
    })
});