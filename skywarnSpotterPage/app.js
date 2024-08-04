// app.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("Skywarn Spotter App is ready!");

    // Handle form submission for weather reports
    const reportForm = document.getElementById('reportForm');
    reportForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const location = document.getElementById('location').value;
        const reportType = document.getElementById('reportType').value;
        const description = document.getElementById('description').value;

        // Add the report to the report list
        const reportList = document.getElementById('reportList');
        const newReport = document.createElement('div');
        newReport.innerHTML = `<strong>${reportType}</strong> at <em>${location}</em>: ${description}`;
        reportList.appendChild(newReport);

        // Reset form fields
        reportForm.reset();
    });

    // You can add more JS functionality here for other interactions
});
