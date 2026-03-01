// Function for index.html login check

const passInput = document.getElementById("passInput");

passInput.addEventListener("keydown", (e) => {
  // Allow: backspace, delete, tab, escape, enter, and numbers
  const allowedKeys = ["Backspace", "Delete", "Tab", "Escape", "Enter"];
  if (allowedKeys.includes(e.key) || (e.key >= "0" && e.key <= "9")) {
    return;
  }
  e.preventDefault(); // Stop the keypress if it's a letter/symbol
});
function checkPass() {
  const pass = document.getElementById("passInput").value;
  if (pass === "210218") {
    window.location.href = "main.html";
  } else {
    document.getElementById("error-msg").style.display = "block";
  }
}

// Function to open the modal
function openCard(to, message) {
  const modal = document.getElementById("messageModal");
  document.getElementById("modalTo").innerText = "TO: " + to;
  document.getElementById("modalBody").innerText = message;

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
