document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const errorMsg = document.getElementById("errorMsg");
      const successMsg = document.getElementById("successMsg");

      errorMsg.textContent = "";
      successMsg.textContent = "";

      if (password !== confirmPassword) {
        errorMsg.textContent = "Passwords do not match.";
        return;
      }

      try {
        const res = await fetch("/api/auth/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        });

        const data = await res.json();
        if (res.ok) {
          successMsg.textContent = "Registration successful. You can now log in.";
          registerForm.reset();
        } else {
          errorMsg.textContent = data.error || "Registration failed.";
        }
      } catch (err) {
        errorMsg.textContent = "Error connecting to server.";
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const errorMsg = document.getElementById("errorMsg");

      errorMsg.textContent = "";

      try {
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        const data = await res.json();
        if (res.ok) {
          // Redirect to dashboard or store token
          window.location.href = "dashboard.html";
        } else {
          errorMsg.textContent = data.error || "Login failed.";
        }
      } catch (err) {
        errorMsg.textContent = "Error connecting to server.";
      }
    });
  }
});
