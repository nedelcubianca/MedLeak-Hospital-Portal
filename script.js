document.addEventListener("DOMContentLoaded", function () {
  
  const form = document.getElementById("loginForm");
  const status = document.getElementById("status");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    fetch("data/users.json")
      .then((res) => res.json())
      .then((users) => {
        const foundUser = users.find((u) => u.username === username);
        const validUser = users.find((u) => u.username === username && u.password === password);

        if (validUser) {
          window.location.href = validUser.redirect;
        } else {
          status.textContent = foundUser ? "Incorrect password!" : "User does not exist!";
          status.style.color = "red";
        }
      })
      .catch((err) => {
        console.error("Error reading users.json:", err);
        status.textContent = "Internal error.";
        status.style.color = "darkred";
      });
  });

});
