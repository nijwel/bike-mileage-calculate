function showAlert(message) {
  const alertBox = document.getElementById("alertBox");
  alertBox.innerText = message;
  alertBox.classList.add("show");

  setTimeout(() => {
    alertBox.classList.remove("show");
  }, 3000); // 3 seconds
}

function calculate() {
  const pricePerLiter = parseFloat(
    document.getElementById("pricePerLiter").value
  );
  const totalTk = parseFloat(document.getElementById("totalTk").value);
  const totalKm = parseFloat(document.getElementById("totalKm").value);

  if (
    pricePerLiter <= 0 ||
    totalTk <= 0 ||
    totalKm <= 0 ||
    isNaN(pricePerLiter) ||
    isNaN(totalTk) ||
    isNaN(totalKm)
  ) {
    showAlert("অনুগ্রহ করে সব ইনপুট সঠিকভাবে দিন!");
    return;
  }

  const oilLiters = totalTk / pricePerLiter;
  const mileage = totalKm / oilLiters;
  const litersPer100Km = 100 / mileage;

  document.getElementById(
    "oilLiters"
  ).innerText = `তেলের পরিমাণ: ${oilLiters.toFixed(2)} লিটার`;
  document.getElementById("mileage").innerText = `মাইলেজ: ${mileage.toFixed(
    2
  )} কিমি/লিটার`;
  document.getElementById(
    "litersPer100Km"
  ).innerText = `লিটার প্রতি 100 কিমি: ${litersPer100Km.toFixed(2)} লিটার`;

  document.getElementById("result").style.display = "block";
}

function clearFields() {
  document.getElementById("pricePerLiter").value = "";
  document.getElementById("totalTk").value = "";
  document.getElementById("totalKm").value = "";
  document.getElementById("result").style.display = "none";
}
