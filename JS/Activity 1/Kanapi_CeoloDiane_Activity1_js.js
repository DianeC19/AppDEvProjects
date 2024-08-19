//Components for Item number 1
const btn1 = document.getElementById("btn1")
//Event listeners
btn1.addEventListener("click", ()=>{
    //populate variables
    let name = document.getElementById("name").value
    let address = document.getElementById("address").value
    let telephone = document.getElementById("telephone").value
    let major = document.getElementById("major").value
    let x = `Hello! ${name}, I see that you are from ${address} and you are pursuing your degree
     ${major} and you can be contacted using ${telephone}.\n` //Curly Braces
    document.getElementById("output").innerHTML = x
})
    //Components of Item number 2
    function calculateProfit() {
      const totalSales = parseFloat(document.getElementById("salesInput").value);
      const profitPercentage = 0.23; 
      const profit = totalSales * profitPercentage;
      document.getElementById("profitOutput").textContent = `The estimated profit is P${profit}`;
    }

    //Components of Item number 3
    
    const btn3 = document.getElementById("btn3")
    //Event listeners
    btn3.addEventListener("click", ()=>{
            const speed = 60;
            const times = [5, 8, 12];
            const outputIds = ["output21", "output22", "output222"];
        
            for (let i = 0; i < times.length; i++) {
                let distance = speed * times[i];
                document.getElementById(outputIds[i]).textContent = distance;
            }
        });

  

      //Components of Item number 4
      function calculateMPG() {
        // Get the user's input
        const miles = parseFloat(document.getElementById("milesInput").value);
        const gallons = parseFloat(document.getElementById("gallonsInput").value);
        const mpg = miles / gallons;
        document.getElementById("mpgOutput").textContent = `Your car's MPG is: ${mpg}`;
      }


      //Components of Item number 5
      function convertTemperature() {
        const celsius = parseFloat(document.getElementById("celsiusInput").value);
        const fahrenheit = (9 / 5) * celsius + 32;
        document.getElementById("fahrenheitOutput").textContent = `${celsius}°C is
         equivalent to ${fahrenheit}°F.`;
      }



      //Components of Item number 6
      function calculateCalories() {
        const cookiesEaten = parseInt(document.getElementById("cookiesEaten").value);
        const cookiesPerBag = 40;
        const servingsPerBag = 10;
        const caloriesPerServing = 300;
        const totalCalories = (cookiesEaten / cookiesPerBag) * servingsPerBag * caloriesPerServing;
        document.getElementById("caloriesOutput").textContent = `You consumed ${totalCalories} calories.`;
      }



      //Components of Item number 7
      function calculatePercentages() {
        const maleCount = parseInt(document.getElementById("maleCount").value);
        const femaleCount = parseInt(document.getElementById("femaleCount").value);
        const totalStudents = maleCount + femaleCount;
        const malePercentage = (maleCount / totalStudents) * 100;
        const femalePercentage = (femaleCount / totalStudents) * 100;
        document.getElementById("malePercentage").textContent = `The percentage of
         males in the class is ${malePercentage}%.`;
        document.getElementById("femalePercentage").textContent = `The percentage of 
        females in the class is ${femalePercentage}%.`;
      }

