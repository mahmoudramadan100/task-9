let list = document.querySelector('.dashboard-list');
let app = document.querySelector('.applications');
let navSmall = document.querySelector('.small-menu');
let showMenu = document.querySelector('.show-menu');
let arrow = document.querySelector('.arrow');



list.onclick = function() {
    navSmall.classList.toggle("show");
    list.classList.toggle("arrow-icon")
}
app.onclick = function() {
    showMenu.classList.toggle("show");
    app.classList.toggle("arrow-icon")
}


// const toggleMenuOpen = () => document.body.classList.toggle("open");
const toggleSidebar = () => document.body.classList.toggle("open");




// var likeIcon = document.getElementById('#like-icon');
// var dislike = document.getElementById('#dislike');


// likeIcon.addEventListener('click', function() {
  
//     if (dislike.classList.contains('main-color')) {
//         dislike.classList.remove('gray-color');
//     } 
//   this.classList.toggle('main-color');
  
// });

// dislike.addEventListener('click', function() {
  
//     if (likeIcon.classList.contains('main-color')) {
//         likeIcon.classList.remove('gray-color');
//     } 
//   this.classList.toggle('main-color');
  
// });