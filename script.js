document.getElementById('smokingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const startYear = parseInt(document.getElementById('startYear').value);
    const cigarettesPerDay = parseInt(document.getElementById('cigarettesPerDay').value);

    const currentYear = new Date().getFullYear(); // Get the current year
    const yearsSmoking = currentYear - startYear; // Calculate years of smoking
    const totalCigarettes = yearsSmoking * cigarettesPerDay * 365; // Total cigarettes smoked
    
    // Calculate days lost based on the assumption of 11 minutes per cigarette
    const daysLostPerCigarette = 11 / 1440; // Convert minutes to days
    const daysLost = totalCigarettes * daysLostPerCigarette; // Total days lost

    document.getElementById('result').innerHTML = `Approximate Days Lost Due to Smoking: ${Math.round(daysLost)} days`;
});
