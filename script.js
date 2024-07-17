document.addEventListener("DOMContentLoaded", function() {
  const githubLink = document.getElementById("github-link");
  const linkedinLink = document.getElementById("linkedin-link");
  const gmailLink = document.getElementById("gmail-link");

  githubLink.addEventListener("click", function(event) {
      event.preventDefault();
      window.open(githubLink.href, '_blank');
  });

  linkedinLink.addEventListener("click", function(event) {
      event.preventDefault();
      window.open(linkedinLink.href, '_blank');
  });

  gmailLink.addEventListener("click", function(event) {
      event.preventDefault();
      window.open(gmailLink.href, '_blank');
  });
});
