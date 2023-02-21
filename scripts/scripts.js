const emailInput = document.getElementById('client-email');

function orderPhotoshoot(event) {
    const value = emailInput.value;
    if (!value) {
        alert('Email is required');
    } else {
        alert('I will contact your by sending letter to \'' + value + '\'.');
    }

    event.preventDefault();
}

const form = document.getElementById('email-form');

form.addEventListener('submit', orderPhotoshoot);