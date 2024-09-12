// Get reference to the form and display area
var _a;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
    e.preventDefault();
    // Get input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var objective = document.getElementById('objective').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var languages = document.getElementById('languages').value;
    // Get the resume display container
    var resumeDisplay = document.getElementById('resume-display');
    // Generate the resume and display it
    if (resumeDisplay) {
        resumeDisplay.innerHTML = "\n          <h2>Resume</h2>\n          <p><strong>Name:</strong> ".concat(name, "</p>\n          <p><strong>Email:</strong> ").concat(email, "</p>\n          <p><strong>Phone Number:</strong> ").concat(phone, "</p>\n          <h3>Objective</h3>\n          <p>").concat(objective, "</p>\n          <h3>Education</h3>\n          <p>").concat(education, "</p>\n          <h3>Experience</h3>\n          <p>").concat(experience, "</p>\n          <h3>Skills</h3>\n          <p>").concat(skills, "</p>\n          <h3>Languages</h3>\n          <p>").concat(languages, "</p>\n      ");
    }
});
