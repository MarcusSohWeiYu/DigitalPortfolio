let isExpanded = false; // Track the state of the experience section

function toggleExperience() {
  console.log('Toggle button clicked');
  const allEntries = document.querySelectorAll('.experience-grid .resume-entry');
  console.log('All entries:', allEntries);
  const toggleButton = document.getElementById('toggleButton');

  if (isExpanded) {
    // If currently expanded, hide the extra entries
    allEntries.forEach((entry, index) => {
      if (index >= 4) { // Assuming you want to show only the first 4 entries initially
        entry.classList.add('hidden'); // Add the hidden class
        console.log('Hiding entry:', entry); // Log the entry being hidden
      }
    });
    toggleButton.textContent = 'View More ▼'; // Change button text
  } else {
    // If currently collapsed, show the extra entries
    allEntries.forEach((entry, index) => {
      if (index >= 4) { // Assuming you want to show only the first 4 entries initially
        entry.classList.remove('hidden'); // Remove the hidden class
        console.log('Showing entry:', entry); // Log the entry being shown
      }
    });
    toggleButton.textContent = 'View Less ▲'; // Change button text
  }

  // Toggle the state correctly
  isExpanded = !isExpanded; // Change this line to toggle the state
  console.log("isExpanded:", isExpanded); // Log the current state
}