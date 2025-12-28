document.getElementById('navbar');
document.addEventListener('scroll', () =>{
var scroll_position = window.scrollY;
if(scroll_position > 260){
  navbar.style.backgroundColor = '#000';
} else{
  navbar.style.backgroundColor = '#003349';
}
});