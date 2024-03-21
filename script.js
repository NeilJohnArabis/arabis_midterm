// JS for image upload form
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("imageUploadForm").addEventListener("submit", function(event) {
      event.preventDefault();
      // mag handle sa image nga e upload
      alert("Image uploaded successfully!");
    });
  });
  