document.getElementById('smokingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const startYear = parseInt(document.getElementById('startYear').value);
    const cigarettesPerDay = parseInt(document.getElementById('cigarettesPerDay').value);

    const yearsSmoking = age - startYear; // Calculate years of smoking
    const totalCigarettes = yearsSmoking * cigarettesPerDay * 365; // Total cigarettes smoked
    const daysLost = totalCigarettes * (10 / 20); // Approximate days lost (based on average loss of life)

    document.getElementById('result').innerHTML = `Approximate Days Lost Due to Smoking: ${Math.round(daysLost)} days`;
});