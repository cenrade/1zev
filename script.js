/* 1. PASSWORD PROTECTION LOGIC */
const passInput = document.getElementById("passInput");

// This ensures only numbers can be typed (the fix for your login)
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

/* 2. MODAL & SONG LOGIC */
function openCard(to, message, songUrl) {
  const modal = document.getElementById("messageModal");
  document.getElementById("modalTo").innerText = "TO: " + to;
  document.getElementById("modalBody").innerText = message;

  const songContainer = document.getElementById("modalSong");

  // Checks if a URL was provided and isn't a placeholder
  if (songUrl && songUrl !== "PASTE_SPOTIFY_EMBED_URL_HERE") {
    songContainer.innerHTML = `
            <div class="content-divider"></div>
            <iframe 
                src="${songUrl}" 
                width="100%" 
                height="80" 
                frameBorder="0" 
                allowfullscreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
            </iframe>
        `;
  } else {
    songContainer.innerHTML = "";
  }

  modal.style.display = "block";
}

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
