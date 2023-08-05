function getcolor() {
  var randomcolor = Math.floor(Math.random() * 16777215);
  var gen = "#" + randomcolor.toString(16);

  document.body.style.backgroundColor = gen;
  document.getElementById("colorcode").innerText = gen;
}
document.getElementById("btn").addEventListener("click", getcolor);

getcolor();

gsap.from(".main>h1", {
  y: -500,
  opacity: 0,
  duration: 1,
});
