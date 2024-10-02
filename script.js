const card = document.getElementById("card");

card.addEventListener("click", function () {
  card.textContent = "Surprise! 🎉";
  card.classList.toggle("revealed");
});
