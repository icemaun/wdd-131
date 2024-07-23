document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const data = {};

        formData.forEach((value, key) => {
            data[key] = value;
        });

        displaySummary(data);
    }

    function displaySummary(data) {
        const summary = document.getElementById('summary');
        summary.innerHTML = `
            <h2>Application Summary</h2>
            <h3>Personal Information</h3>
            <p><strong>First Name:</strong> ${data.fname}</p>
            <p><strong>Last Name:</strong> ${data.lname}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Address:</strong> ${data.address}</p>
            <p><strong>City:</strong> ${data.city}</p>
            <p><strong>State:</strong> ${data.state}</p>
            <p><strong>Zip Code:</strong> ${data.zip}</p>

            <h3>Job Details</h3>
            <p><strong>Position Applied For:</strong> ${data.position}</p>
            <p><strong>Years of Experience:</strong> ${data.experience}</p>
            <p><strong>Relevant Skills:</strong> ${data.skills}</p>
            <p><strong>Available Start Date:</strong> ${data.startdate}</p>
            <p><strong>Desired Salary ($):</strong> ${data.salary}</p>

            <h3>References</h3>
            <p><strong>Reference Name:</strong> ${data.refname}</p>
            <p><strong>Reference Phone:</strong> ${data.refphone}</p>
            <p><strong>Reference Email:</strong> ${data.refemail}</p>
            <p><strong>Relationship:</strong> ${data.relationship}</p>
        `;

        // Scroll to the summary section
        summary.scrollIntoView({ behavior: 'smooth' });
    }
});
