document.getElementById('downloadCvLink').addEventListener('click', function (e) {
  // Check if the user is on a mobile device
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Prevent the default action of the link
    e.preventDefault();
    
    // Open the PDF URL in a new tab
    window.open('Resume/Soh-Wei-Yu_Resume.pdf', '_blank');
  }
  // For desktop users, the default "download" attribute behavior will proceed
});