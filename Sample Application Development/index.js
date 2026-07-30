function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let output = document.getElementById("output");

    if (name === "" || email === "" || password === "") {
        output.innerHTML = "All fields are required!";
        output.style.color = "red";
    } else {
        output.innerHTML = "Registration Successful!";
        output.style.color = "green";
    }
}