// ---------------- CONTACT FORM VALIDATION ----------------
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent auto submit

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let errorMsg = document.getElementById("errorMsg");

    // Email validation pattern
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check required fields
    if (name === "" || email === "" || message === "") {
        errorMsg.textContent = "All fields are required!";
        errorMsg.style.color = "red";
        return;
    }

    // Check correct email format
    if (!emailPattern.test(email)) {
        errorMsg.textContent = "Invalid email address!";
        errorMsg.style.color = "red";
        return;
    }

    // Success message
    errorMsg.style.color = "green";
    errorMsg.textContent = "Form submitted successfully!";
});
function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskValue = taskInput.value.trim();
  let taskList = document.getElementById("taskList");

  if (taskValue === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.textContent = taskValue;

  // delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  taskInput.value = "";
}


