import './style.css';

const form = document.getElementById('registrationForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  form.reset();

  successMessage.textContent = "Sikeres regisztráció!";
});