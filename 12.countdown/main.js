const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2023, 12, 24, 11, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

giveaway.textContent = `Giveaway Ends on Sunday, 24 April ${year} ${hours}: ${minutes} am`;

console.log(futureDate);
