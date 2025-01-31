function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    fetch("users.txt")
        .then(response => response.text())
        .then(data => {
            const users = data.split("\n").map(line => line.trim());
            let isValid = false;

            for (const user of users) {
                const [storedUser, storedPass] = user.split(",");
                if (username === storedUser && password === storedPass) {
                    isValid = true;
                    break;
                }
            }

            if (isValid) {
                alert("Login successful!");
                window.location.href = "welcome.html"; // Redirect after login
            } else {
                errorMessage.textContent = "Invalid username or password!";
            }
        })
        .catch(error => console.error("Error loading user data:", error));
}
