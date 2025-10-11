function toggleMenu(){document.getElementById("nav").classList.toggle("open")}
function toggleFab(){const f=document.getElementById("fabIcons"),b=document.querySelector(".fab-button"),s=f.classList.contains("show");f.classList.toggle("show"),b.textContent=s?"+":"×"}
document.addEventListener("click",e=>{const n=document.getElementById("nav"),m=document.querySelector(".menu-btn");n&&!n.contains(e.target)&&m&&!m.contains(e.target)&&n.classList.remove("open")})
const slides=document.querySelectorAll(".fade-slider img");if(slides.length>0){let i=0;slides.forEach((img,j)=>{j!==0&&img.classList.remove("active")});setInterval(()=>{slides[i].classList.remove("active"),i=(i+1)%slides.length,slides[i].classList.add("active")},4000)}
