function validar() {
  var username, password;
  username = document.getElementById("username").value.trim();
  password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("Please fill all fields");
  } else if ((username === "admin") & (password === "admin")) {
    alert("Access Granted");
  } else if (username !== "admin" || password !== "admin") {
    alert("Wrong username/password combination, please try again");
  }
  return false;
}
