function addPerson() {
  const name = document.getElementById("name").value;
  const place = document.getElementById("place").value;

  const table = document.getElementById("peopleTable");
  const tbody = table.querySelector("tbody");

  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.innerHTML = `<strong>${name}</strong>`;
  row.appendChild(nameCell);

  const placeCell = document.createElement("td");
  placeCell.innerHTML = `<strong>${place}</strong>`;
  row.appendChild(placeCell);

  const deleteButton = document.createElement("td");
  deleteButton.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';
  row.appendChild(deleteButton);

  tbody.appendChild(row);

  // Clear input fields
  document.getElementById("name").value = "";
  document.getElementById("place").value = "";
}

function deleteRow(button) {
  const row = button.closest('tr');
  row.remove();
}
