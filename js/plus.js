function toggleContent(blockId) {
  var blockContent = document.getElementById(blockId);
  var icon = document.getElementById("icon" + blockId.slice(-1));

  if (
    blockContent.style.display === "none" ||
    blockContent.style.display === ""
  ) {
    blockContent.style.display = "block";
    icon.innerHTML = "➖";
  } else {
    blockContent.style.display = "none";
    icon.innerHTML = "➕";
  }
}
