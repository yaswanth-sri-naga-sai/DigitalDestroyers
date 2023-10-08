// Add this code in your script.js file
document.addEventListener("DOMContentLoaded", () => {
    // Fetch student data from your server/API by making an AJAX request
    fetchStudentData()
        .then((studentData) => {
            // Render student data in the page
            renderStudentData(studentData);
        })
        .catch((error) => {
            console.error("Error fetching student data:", error);
        });
});

// Function to fetch student data from your server/API
function fetchStudentData() {
    // Make an AJAX request to fetch student data based on the logged-in student's ID
    const loggedInStudentID = "12345"; // Replace with the actual logged-in student's ID

    return fetch(`/api/students/${loggedInStudentID}`) // Replace with your API endpoint
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        });
}

// Function to render student data in the page
function renderStudentData(studentData) {
    const studentDataContainer = document.getElementById("student-data");

    // Create HTML elements to display student information
    const studentInfoHTML = `
        <h2>${studentData.FirstName} ${studentData.LastName}</h2>
        <p>Student ID: ${studentData.StudentID}</p>
        <p>Date of Birth: ${studentData.DateOfBirth}</p>
        <p>Email: ${studentData.Email}</p>
        <p>Phone: ${studentData.Phone}</p>
        <p>Department ID: ${studentData.DepartmentID}</p>
        <!-- Add other relevant student information here -->
    `;

    // Insert the student information HTML into the container
    studentDataContainer.innerHTML = studentInfoHTML;
}
