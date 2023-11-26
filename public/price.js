const roomPricePerNight = document.getElementById("price");
const totalPrice = document.getElementById("totalPrice");
const totalDays = document.getElementById("totalDays");

function calculator() {
  const checkin = new Date(document.getElementById("checkin").value);
  const checkout = new Date(document.getElementById("checkout").value);

  if (checkin && checkout) {
    const diff = checkout.getTime() - checkin.getTime();

    const diffDays = diff / (1000 * 3600 * 24);

    totalDays.textContent = `${diffDays}`;
    totalPrice.value = roomPricePerNight.value * diffDays;
  }
}
