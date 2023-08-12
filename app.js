let glassesRemaining;
// Initialize DOM elements
const waterTarget = document.getElementById("waterTarget");
const remainingWater = document.getElementById("remainingWater");
const waterInput = document.getElementById("waterInput");
const drinkButton = document.getElementById("drinkButton");
const resetButton = document.getElementById("resetButton");


function updateWaterDisplay() {
    // Retrieve data from localStorage
    glassesRemaining = localStorage.getItem("glassesRemaining");
    glassesRemaining = glassesRemaining !== null ? parseInt(glassesRemaining) : 14;
    remainingWater.textContent = glassesRemaining;
    if (glassesRemaining <= 0) {
        glassesRemaining = 14; // Reset to 14 glasses
        localStorage.setItem("glassesRemaining", glassesRemaining); // Save reset value to localStorage
        waterTarget.textContent = "Well done! You drunk the all glassess 👏";
        let clapingSound = new Audio('./audio/crowd-cheer-ii-6263.mp3');
        clap(clapingSound);
        drinkButton.disabled = false;
    } else if (glassesRemaining === 14) {
        waterTarget.textContent = "Stay Hydrated";
        drinkButton.disabled = false;
    } else {
        waterTarget.textContent = "Stay Hydrated";
        drinkButton.disabled = false;
    }
}


drinkButton.addEventListener("click", () => {
    const glassesDrank = parseInt(waterInput.value);
    if (!isNaN(glassesDrank) && glassesDrank >= 0 && glassesDrank <= glassesRemaining) {
        glassesRemaining -= glassesDrank;
        // Save data to localStorage
        localStorage.setItem("glassesRemaining", glassesRemaining);
        updateWaterDisplay();
        waterInput.value = 0; // Reset the input field
    } else {
        alert("Please enter a valid number of glasses to drink.");
    }
});


function clap(audio) {
    // Play the audio
    audio.play();

    // Define the duration after which the audio should be stopped (in milliseconds)
    const durationInSeconds = 6; // Change this to your desired duration
    const durationInMilliseconds = durationInSeconds * 1000;

    // Use setTimeout to stop the audio after the specified duration
    setTimeout(() => {
        audio.pause();
        audio.currentTime = 0; // Reset the audio to the beginning
    }, durationInMilliseconds);
}



resetButton.addEventListener('click', () => {
    if (remainingWater.innerText != "") {
        alert('Would you like to reset remaining water');
        localStorage.setItem('glassesRemaining', 14);
        updateWaterDisplay();
        waterInput.value = 0;
    }

})

updateWaterDisplay();