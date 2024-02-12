/**
 * @copyright Ayush Agarwal
 * @author Ayush <codingayush9@gmail.com>
 */

"use strict";


/**
 * Light and dark mode
 */

const /** {NodeElement} */ $themeBtn = document.querySelector("[data-theme-btn]");
const /** {NodeElement} */ $HTML = document.documentElement;
let /** {Boolean | String} */ isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (sessionStorage.getItem("theme")) {
  $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
  $HTML.dataset.theme = isDark ? "dark" : "light";
}

const changeTheme = () => {

  $HTML.dataset.theme = sessionStorage.getItem("theme") === "light" ? "dark" : "light";
  sessionStorage.setItem("theme", $HTML.dataset.theme);

}

$themeBtn.addEventListener("click", changeTheme);


/**
 * TAB
 */

const /** {NodeList} */ $tabBtn = document.querySelectorAll("[data-tab-btn]");
let /** {NodeElement} */[lastActiveTab] = document.querySelectorAll("[data-tab-content]");
let /** {NodeElement} */[lastActiveTabBtn] = $tabBtn;

$tabBtn.forEach(item => {
  item.addEventListener("click", function () {

    lastActiveTab.classList.remove("active");
    lastActiveTabBtn.classList.remove("active");

    const /** {NodeElement} */ $tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`);
    $tabContent.classList.add("active");
    this.classList.add("active");

    lastActiveTab = $tabContent;
    lastActiveTabBtn = this;

  });
  // script.js
  


  
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting via HTTP

  // Fetch form values
  var formData = {
      name: document.getElementsByName('name')[0].value,
      email: document.getElementsByName('email')[0].value,
      subject: document.getElementsByName('subject')[0].value,
      message: document.getElementsByName('message')[0].value
  };

  // Send email using EmailJS
  emailjs.send(service_1lo3wxi, template_w8c4r6c, formData)
      .then(function(response) {
          console.log('Email sent successfully', response);
          // You can redirect or show a success message here if needed
      }, function(error) {
          console.error('Email sending failed', error);
          // You can redirect or show an error message here if needed
      });
    });