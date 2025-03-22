var submit = document.getElementById("submit");
var output = document.getElementById("output");

function delItem(button) {
  button.parentElement.parentElement.remove(); 
}

submit.addEventListener("click", function (event) {
  event.preventDefault(); 

  // Selecting input elements
  var name = document.getElementById("name");
  var age = document.getElementById("age");
  var course = document.getElementById("course");
  var gen = document.querySelector('input[name="gender"]:checked');
  var mail = document.getElementById("email");

  // Creating a new <p> element to display the form data
  var p = document.createElement("p");
  p.innerHTML =
    `<div class="output-item">Name: ${name.value}</div>
    <div class="output-item">Age: ${age.value}</div>
    <div class="output-item">Course: ${course.value}</div>
    <div class="output-item">Gender: ${gen.value}</div>
    <div class="output-item">Email: ${mail.value}</div>
    <div class="delete-container">
      <button onclick="delItem(this)">Delete</button>
    </div>`;

  // Appending the <p> element to the output section
  output.append(p);
});
