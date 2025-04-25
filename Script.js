function imgSlider(anything){
    document.querySelector('.donut').src = anything;
}
function changeColor(color){
    const ball = document.querySelector('.ball');
    ball.style.background =  color;
    
}
function Showsidebar() {
    const sidebar = document.querySelector('.side-bar');
    sidebar.style.display = 'flex'
}
function hidebar() {
    const sidebar = document.querySelector('.side-bar');
    sidebar.style.display = 'none'
}