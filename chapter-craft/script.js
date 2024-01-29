function showPopup() {
    // Display the popup
    document.getElementById('popup').style.display = 'block';

    // Close the popup after a delay (e.g., 3000 milliseconds or 3 seconds)
    setTimeout(function() {
        closePopup();
    }, 6000);
}

// Close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Call your existing function when the page loads
document.addEventListener('DOMContentLoaded', function() {
    CheckCreds();
});



