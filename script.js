document.addEventListener("DOMContentLoaded", function () {
    var el = document.querySelector(".button-bird");
    var text = document.querySelector(".button-bird__text");
    el.addEventListener("click", function () {
        el.classList.toggle("active");

        if (el.classList.contains("active")) {
            console.log("true");
            text.innerHTML = "DONE";
        } else {
            text.innerHTML = "SEND";
        }
    });
});
