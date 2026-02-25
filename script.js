// Function for index.html login check
function checkPass() {
  const pass = document.getElementById("passInput").value;
  if (pass === "210218") {
    window.location.href = "main.html";
  } else {
    document.getElementById("error-msg").style.display = "block";
  }
}

// Function to open the modal
function openCard(toName, fullMessage) {
  const modal = document.getElementById("messageModal");
  document.getElementById("modalTo").innerText = "To: " + toName;
  document.getElementById("modalBody").innerText = fullMessage;
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById("messageModal");
  modal.style.display = "none";
}

// Close when clicking outside the box
window.onclick = function (event) {
  const modal = document.getElementById("messageModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
