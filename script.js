function openCard(to, message, songUrl) {
  const modal = document.getElementById("messageModal");
  document.getElementById("modalTo").innerText = "TO: " + to;
  document.getElementById("modalBody").innerText = message;

  const songContainer = document.getElementById("modalSong");
  if (songUrl) {
    // This creates the Spotify player at the bottom of the message
    songContainer.innerHTML = `
      <div class="content-divider"></div>
      <iframe src="${songUrl}" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    `;
  } else {
    songContainer.innerHTML = "";
  }

  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("messageModal").style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("messageModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
