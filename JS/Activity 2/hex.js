const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F" ]
const btn = document.getElementById("btn")
const color = document.querySelector(".color")


    btn.addEventListener("click", () => {

        console.log(document.body)
        const randomNumber = getRandomNumber()
        document.body.style.backgroundColor = colors[randomNumber]
        color.textContent = colors [randomNumber]
    }) 
    getRandomNumber = () => {
        return Math.floor(Math.random() * colors.length)
    }