window.onload = () => {
  setTimeout(() => {
    document.querySelector(".preloader").classList.add("hidden");
  }, 1500);
};
document.querySelector('.preloader').style.opacity = ".05"

document.querySelector('.header__burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header__navbar').classList.toggle('open')
})

const headers = document.querySelectorAll("[data-name='spoiler-title']");

headers.forEach(function (item) {
  item.addEventListener("click", headerClick);
});

function headerClick() {
  this.nextElementSibling.classList.toggle("spoiler-body");
}