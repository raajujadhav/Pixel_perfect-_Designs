function changeColor(boxId, color) {
  document.getElementById(boxId).style.backgroundColor = color;
}

function toggleCheckbox(boxId) {
  const checkbox = document
    .getElementById(boxId)
    .querySelector('.checkbox-container input[type="checkbox"]');
  checkbox.checked = !checkbox.checked;
  const box = document.getElementById(boxId);
  if (checkbox.checked) {
    box.classList.add("checked");
  } else {
    box.classList.remove("checked");
  }
}

function changeDropdown(value, boxId) {
  const box = document.getElementById(boxId);
  if (value === "small" || value === "medium" || value === "large") {
    box.style.fontSize =
      value === "small" ? "12px" : value === "medium" ? "16px" : "20px";
  } else if (value === "red" || value === "green" || value === "blue") {
    box.style.backgroundColor = value;
  } else if (value === "solid" || value === "dotted" || value === "dashed") {
    box.style.borderStyle = value;
  }
}
