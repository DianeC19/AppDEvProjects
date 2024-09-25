const colors = ["green", "red", "rgba(133, 122, 200)", "f15025"]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")

//function to change the colors of the Background
btn.addEventListener("click", () =>{
// target the body from the HTML 
console.log(document.body)
const randomNumber = getRandomNumber()
document.body.style.backgroundColor = colors[randomNumber]
color.textContent = colors[randomNumber]
})
getRandomNumber = () => {
    return Math.floor(Math.random() * colors.length)
}
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
    links.classList.toggle('show-links'); // Ensure you have CSS to handle this
});