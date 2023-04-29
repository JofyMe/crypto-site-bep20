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


function headerClick() {
  this.nextElementSibling.classList.toggle("spoiler-body");
}