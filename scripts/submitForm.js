// Query selectors
const regForm = document.querySelector("#registration-form");
const fullName = document.querySelector('#name');
const email = document.querySelector("#email");
const countryOfResidenceDropdown = document.querySelector("#country");
const phoneNumber = document.querySelector("#phone");
const submitBtn = document.querySelector("#registration-form-submit-btn");
const confirmationPopup = document.querySelector(".confirmation-popup");
const confirmationPopupCloseBtn = document.querySelector(".close-btn");
const popupMask = document.querySelector(".popup-mask");

function getIp(callback) {
    fetch('https://ipinfo.io/json?token=66dcd621fbcd97', { headers: { 'Accept': 'application/json' }})
        .then((resp) => resp.json())
        .catch(() => {
        return {
            country: 'us',
        };
        })
        .then((resp) => callback(resp.country));
}

// const phoneInput = window.intlTelInput(phoneNumber, {
//     initialCountry: "auto",
//     geoIpLookup: getIp,
//     utilsScript:
//     "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
// });

const phoneInput = window.intlTelInput(phoneNumber, {
    initialCountry: "auto",
    utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});



//Form submit event listener
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const selectedCountry = countryOfResidenceDropdown.options[countryOfResidenceDropdown.selectedIndex];

    const phoneNumberValue = phoneInput.getNumber();

    const registrationFormData = new FormData();

    registrationFormData.append("entry.2092238618", fullName.value);
    registrationFormData.append("entry.1556369182", email.value);
    registrationFormData.append("entry.1704255337", selectedCountry.value);
    registrationFormData.append("entry.588393791", phoneNumberValue);

    fetch("https://docs.google.com/forms/u/2/d/e/1FAIpQLSenrW1c5D6IbJcFoWUrmBdU3U9CTUsOHVazBp2_Sfeop4vzDg/formResponse", {
        method: "post",
        body: registrationFormData,
    })
    .then(function (response) {
        return response.status;
    })
    .then(function (response) {
        if (response === 200){
            confirmationPopup.style.display = "block";
        }
    })
    .catch(function (error) {
        console.log(error)
    })

})


//Close Confirmation Popup

confirmationPopupCloseBtn.addEventListener('click', () => {
    confirmationPopup.style.display = "none";
})

