var mainSlider = document.querySelector(".slider");
console.log (mainSlider);
var sliderButton = mainSlider.querySelectorAll(".slider__button");
var sliderSlide = mainSlider.querySelectorAll(".slider__slide");
var servicesSlider = document.querySelector(".services");
console.log (servicesSlider);


var popupBackground = document.querySelector(".popup-background");
var map = document.querySelector(".map__link");
console.log (popupMap);
var popupMap = document.querySelector(".popup-map");

var popupWriteUs = document.querySelector(".write-us__link");
console.log (popupWriteUs);
var popupForm = document.querySelector(".popup-form");
var popupFormBack = popupForm.querySelector(".popup__close-button");
console.log (popupFormBack);
var form = popupForm.querySelector("form");
var inputName = popupForm.querySelector(".popup__name");
var inputMail = popupForm.querySelector(".popup__mail");
var inputText = popupForm.querySelector(".popup__half-input--textarea");
var storageName = localStorage.getItem("Name");;
var storageMail = localStorage.getItem("Mail");
console.log (form);

try {
    storageName = localStorage.getItem("Name");
} catch(err) {
    storageName=false;
};
try {
    storageMail = localStorage.getItem("Mail");
} catch(err) {
    storageMail=false;
};

map.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log("клик по карте");
    popupBackground.classList.add("popup--display");
    popupMap.classList.add("popup--display");
    popupMap.classList.add("popup--display-animation");
});

popupWriteUs.addEventListener("click", function(evt) {
    evt.preventDefault();
    console.log("клик по ссылке Пишите нам");
    popupBackground.classList.add("popup--display");
    popupForm.classList.add("popup--display");
    popupForm.classList.add("popup--display-animation");
    if (storageName) {
        inputName.value = storageName;
        inputMail.focus();
        if (storageMail) {
            inputMail.value = storageMail;
            inputText.focus();
        };
    } else {
        inputName.focus();
    };
});

popupBackground.addEventListener("click", function(evt){
    evt.preventDefault();
    popupBackground.classList.remove("popup--display");
    popupMap.classList.remove("popup--display");
    popupForm.classList.remove("popup--display-animation");
    popupForm.classList.remove("popup-error");
    popupForm.classList.remove("popup--display");
});


form.addEventListener("submit", function(post) {
    if ((!inputName.value)||(!inputMail.value)||(!inputText.value)) {
        post.preventDefault();
        popupForm.classList.remove("popup-error");
        this.getBoundingClientRect();
        popupForm.classList.add("popup-error");
    } else { 
        localStorage.setItem("Name", inputName.value);
        localStorage.setItem("Mail", inputMail.value);
    };
});
popupFormBack.addEventListener("click", function(back) {
    back.preventDefault();
    popupBackground.classList.remove("popup--display");
    popupForm.classList.remove("popup--display");
    popupForm.classList.remove("popup--display-animation");
    popupForm.classList.remove("popup-error");
});
window.addEventListener("keydown", function(esc) {
    if (esc.keyCode === 27) {
        if (popupBackground.classList.contains("popup--display")) {
            esc.preventDefault();
            popupBackground.classList.remove("popup--display")
        };
        if (popupForm.classList.contains("popup--display")) {
            esc.preventDefault();
            popupForm.classList.remove("popup--display");
        };
        if (popupMap.classList.contains("popup--display")) {
            esc.preventDefault();
            popupMap.classList.remove("popup--display");
        };
    } else {};
});
