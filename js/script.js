welcomeMessage();

function welcomeMessage() {
    // Prompt the user for their name
    let userResponse = prompt("What is your name?");

    // If userResponse is null or empty, set a default name
    if (userResponse === null || userResponse.trim() === "") {
        userResponse = "Guest";
    }

    // Display a welcome message on the webpage in the element with id "welcome-speech"
    document.getElementById("welcome-speech").innerText = "Hi " + userResponse + ", welcome to Silvia's Portfolio!";
    console.log(userResponse);
}

// Slider functionality
let index = 0;
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let autoSlideInterval;

function showSlide() {
  slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide();
  resetAutoSlide();
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide();
  resetAutoSlide();
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide();
  }, 4000); // 4 detik
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

startAutoSlide();

// Form submission handling

document.getElementById("submitBtn").addEventListener("click", function () {

    const name = document.getElementById("name").value.trim();
    const birth = document.getElementById("birth").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // reset error
    document.querySelectorAll("[id^='err']").forEach(e => e.innerText = "");

    let valid = true;

    if (!name) {
      document.getElementById("errName").innerText = "Nama wajib diisi";
      valid = false;
    }

    if (!birth) {
      document.getElementById("errBirth").innerText = "Tanggal lahir wajib diisi";
      valid = false;
    }

    if (!email) {
      document.getElementById("errEmail").innerText = "Email wajib diisi";
      valid = false;
    }

    if (!gender) {
      document.getElementById("errGender").innerText = "Pilih jenis kelamin";
      valid = false;
    }

    if (!message) {
      document.getElementById("errMessage").innerText = "Pesan wajib diisi";
      valid = false;
    }

    if (!valid) return;

    // show result
    document.getElementById("resultBox").classList.remove("hidden");

    document.getElementById("resName").innerText = name;
    document.getElementById("resBirth").innerText = birth;
    document.getElementById("resGender").innerText = gender.value;
    document.getElementById("resEmail").innerText = email;
    document.getElementById("resMessage").innerText = message;

    const now = new Date();
    document.getElementById("currentTime").innerText =
      "Current time : " + now.toString();
  });