let firstName = prompt("Write your First Name please.");
let lastName = prompt("Write your Last Name, please.");

let initial1 = firstName.split("");
initial1 = initial1[0];

let initial2 = lastName.split("");
initial2 = initial2[0];

alert("Your Initials are: " + initial1 + "." + initial2);
