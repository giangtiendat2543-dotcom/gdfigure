let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Đã thêm vào giỏ hàng");
}

function showCart() {
  const list = document.getElementById("cart");
  const totalDiv = document.getElementById("total");
  if (!list) return;

  let total = 0;
  list.innerHTML = "";

  cart.forEach(item => {
    total += item.price;
    list.innerHTML += `<li>${item.name} - ${item.price.toLocaleString()} VNĐ</li>`;
  });

  totalDiv.innerText = "Tổng: " + total.toLocaleString() + " VNĐ";
}

function checkout() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push({
    items: cart,
    total: cart.reduce((s,i)=>s+i.price,0)
  });

  localStorage.setItem("orders", JSON.stringify(orders));
  localStorage.removeItem("cart");
  alert("Đặt hàng thành công!");
  location.href = "index.html";
}

showCart();
