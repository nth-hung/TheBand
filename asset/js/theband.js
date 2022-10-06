
const buyBtns = document.querySelectorAll('.js-buy')
const modal = document.querySelector('.js-modal')
const modalcontainer = document.querySelector('.js-modal-container')
const close = document.querySelector('.js-modal-close')

//chạy qua từng btn buy
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}
//chạy sự kiện mở hộp buy
function showBuyTickets() {
    modal.classList.add('open')
}
//close khi click vào nút X
close.addEventListener('click', closeBuyTickets)
function closeBuyTickets() {
    modal.classList.remove('open')
}

//nhấn ra ngoài bảng tự động đóng bảng mua
modal.addEventListener('click', closeBuyTickets)
//click vào bên trong bảng mua k bị đông
modalcontainer.addEventListener('click', function (event) {
    event.stopPropagation()
})

var header = document.getElementById('header')
var headerHeight = header.clientHeight
const mobileMenu = document.querySelector('.menu-mobi')

//đóng mở menu mobile
mobileMenu.onclick = function () {
    var isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto';
    }
    else {
        header.style.height = null;
    }

}


var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i]
    menuItem.onclick = function (event) {
        var isParentMenu= this.nextElementSibling && menuItem.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            event.preventDefault();
        }
        else{
            header.style.height=null; 
        }
       
    }
}



