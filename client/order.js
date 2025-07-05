document.getElementById("orderForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const orderData = {
    name: document.getElementById("name").value,
    quantity: document.getElementById("quantity").value,
    customerName: document.getElementById("customerName").value,
    address: document.getElementById("address").value,
  };

  try {
    const res = await fetch("http://localhost:3000/api/order/place", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    });

    if (res.ok) {
      window.location.href = "thankyou.html";
    } else {
      const result = await res.json();
      alert(result.error || "Failed to place order");
    }
  } catch (err) {
    alert("Server error");
  }
});
