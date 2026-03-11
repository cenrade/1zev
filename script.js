/* 1. PASSWORD PROTECTION LOGIC */
const passInput = document.getElementById("passInput");

if (passInput) {
  passInput.addEventListener("keydown", (e) => {
    const allowedKeys = ["Backspace", "Delete", "Tab", "Escape", "Enter"];
    if (allowedKeys.includes(e.key) || (e.key >= "0" && e.key <= "9")) {
      return;
    }
    e.preventDefault();
  });
}

function checkPass() {
  const pass = document.getElementById("passInput").value;
  if (pass === "210218") {
    window.location.href = "main.html";
  } else {
    document.getElementById("error-msg").style.display = "block";
  }
}

/* 2. MODAL LOGIC */
function openCard(to, message) {
  const modal = document.getElementById("messageModal");

  document.getElementById("modalTo").innerText = "TO: " + to;

  const modalBody = document.getElementById("modalBody");
  modalBody.innerText = message;
  modalBody.style.whiteSpace = "pre-wrap";

  modal.style.display = "block";
}

// ONLY this function will close the modal now
function closeModal() {
  const modal = document.getElementById("messageModal");
  modal.style.display = "none";
}

// REMOVED: window.onclick listener that closed the modal on background click.
