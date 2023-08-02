const form = document.getElementById('form');

// add submit event listener to form

form.addEventListener(submit, submitmyButton)

const submitmyButton = (e) => {
    alert('Flight was booked successful. Please check your email for details.')
    e.preventDefault();

    fetch(Url)
}