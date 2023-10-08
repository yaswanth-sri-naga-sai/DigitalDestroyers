// student.js
document.addEventListener('DOMContentLoaded', function() {
    const viewStatusBtn = document.getElementById('viewStatusBtn');
    const viewDetailsBtn = document.getElementById('viewDetailsBtn');
    const notificationsBtn = document.getElementById('notificationsBtn');
    const historyBtn = document.getElementById('historyBtn');

    // Event listeners for the buttons
    viewStatusBtn.addEventListener('click', function() {
        // Redirect to the placement status page
        window.location.href = 'placement-status.html'; // Replace with the actual URL
    });

    viewDetailsBtn.addEventListener('click', function() {
        // Redirect to the placement details page
        window.location.href = 'placement-details.html'; // Replace with the actual URL
    });

    notificationsBtn.addEventListener('click', function() {
        // Redirect to the notifications page
        window.location.href = 'notifications.html'; // Replace with the actual URL
    });

    historyBtn.addEventListener('click', function() {
        // Redirect to the placement history page
        window.location.href = 'placement-history.html'; // Replace with the actual URL
    });
});
