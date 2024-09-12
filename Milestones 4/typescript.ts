
// Get reference to the form and display area

document.getElementById('resume-form')?.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get input values


  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const objective = (document.getElementById('objective') as HTMLTextAreaElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
  const languages = (document.getElementById('languages') as HTMLTextAreaElement).value;


  // Get the resume display container

  const resumeDisplay = document.getElementById('resume-display');

  // Generate the resume and display it
  
  if (resumeDisplay) {
      resumeDisplay.innerHTML = `
          <h2>Editable Resume</h2>
          <p><strong>Name:</strong><span contenteditable="true">${name}</span></p>
          <p><strong>Email:</strong><span contenteditable="true">${email}</span></p>
          <p><strong>Phone Number:</strong><span contenteditable="true">${phone}</span></p>
          <h3>Objective</h3>
          <p contenteditable="true">${objective}</p>
          <h3>Education</h3>
          <p contenteditable="true">${education}</p>
          <h3>Experience</h3>
          <p contenteditable="true">${experience}</p>
          <h3>Skills</h3>
          <p contenteditable="true">${skills}</p>
          <h3>Languages</h3>
          <p contenteditable="true">${languages}</p>
      `;
  }
});
