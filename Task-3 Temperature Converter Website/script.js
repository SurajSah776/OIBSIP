let initial, final;

function getInfo() {
    const initial_text = document.getElementById("initial");
    initial = initial_text.options[initial_text.selectedIndex].value;

    const final_text = document.getElementById("final");
    final = final_text.options[final_text.selectedIndex].value;
}

const input = document.getElementById("input");
const output = document.getElementById("output");
const convertButton = document.getElementById("convert-btn");


// Functions to convert temperature from one to another
const celsiusToFahrenheit = () => {
    getInfo();
    const fahrenheit = (input.value * 9 / 5) + 32;
    output.innerText = fahrenheit.toFixed(3) + " °F";
}

const fahrenheitToCelsius = () => {
    getInfo();
    const celsius = (input.value - 32) * 5 / 9;
    output.innerText = celsius.toFixed(3) + " °C";
}

const celsiusToKelvin = () => {
    getInfo();
    const kelvin = parseFloat(input.value) + 273.15;
    output.innerText = kelvin.toFixed(3) + " K";
}

const kelvinToCelsius = () => {
    getInfo();
    const celsius = parseFloat(input.value) - 273.15;
    output.innerText = celsius.toFixed(3) + " °C";
}

const fahrenheitToKelvin = () => {
    getInfo();
    const kelvin = (input.value - 32) * 5 / 9 + 273.15;
    output.innerText = kelvin.toFixed(3) + " K";
}

const kelvinToFahrenheit = () => {
    getInfo();
    const fahrenheit = (input.value - 273.15) * 9 / 5 + 32;
    output.innerText = fahrenheit.toFixed(3) + " °F";
}

// Main Method
function mainMethod() {
    convertButton.addEventListener("click", () => {
        getInfo();
        if (initial === "Celsius" && final === "Fahrenheit") {
            celsiusToFahrenheit();
        }

        else if (initial === "Fahrenheit" && final === "Celsius") {
            fahrenheitToCelsius();
        }

        else if (initial === "Celsius" && final === "Kelvin") {
            celsiusToKelvin();
        }

        else if (initial === "Kelvin" && final === "Celsius") {
            kelvinToCelsius();
        }

        else if (initial === "Fahrenheit" && final === "Kelvin") {
            fahrenheitToKelvin();
        }

        else if (initial === "Kelvin" && final === "Fahrenheit") {
            kelvinToFahrenheit();
        }

        else {
            output.innerText = input.value;
        }
    });
}

mainMethod();



mainMethod();
