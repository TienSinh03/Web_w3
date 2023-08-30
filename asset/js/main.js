$(document).ready(function () {
   function kt() {
    let valueTicket =eval($("#ticket").val());
    let ctrTicket = /^[0-9]+$/
    if(valueTicket >= 15 && ctrTicket.test(valueTicket)) {
        $("#ertk").html("");
        return true;
    } else {
        if($("#ticket").val().trim().length === 0) {
            alert("Gia ve khong duoc rong")
        } else {
            $("#ertk").html("1 ve gia 15$");
        }
        return false;
    }
   } 
   $("#ticket").blur( function () {
    kt();

   }); 

   function ktemail() {
    let ctemail = /^[^\s]+@[^\s@]+.com/;

    let valueEmail = $("#sentEmail").val();
    if(ctemail.test(valueEmail)) {
        $("#erem").html("");
        return true;
    } else {
        if($("#sentEmail").val().trim().length === 0) {
            alert("Email khong duoc rong")
        } else {
            $("#erem").html("Email khong hop le");
        }
         return false;
    }
   }
   $("#sentEmail").blur(function () {
    ktemail();
   });
}); 

// ẩn thanh menu

    let hearderElement = document.getElementById('header')
    let menuElement = document.getElementById('menu-button')
    let curnentHeight = hearderElement.clientHeight

    //đóng mở menu
    menuElement.onclick = function() { //clientHeight: lấy kích thước chiều cao của khối 
        if(hearderElement.clientHeight === curnentHeight) {
            hearderElement.style.height = 'auto' 
        } else {
            hearderElement.style.height = null 
        } 
    }

    // tự động khi chọn menu

    
    let itemMenus = document.querySelectorAll('#nav li a[href*="#"]')
    for (let i = 0; i < itemMenus.length; i++) {
        const itemMenu = itemMenus[i];        // thẻ a
        itemMenu.onclick = function(event) {
            
            // nextElementSibling: xét anh chị em liền kề của tk đang xét
            let parentItem = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')

            //không cho ẩn more khi nhấn
                /*Khi nhấn vào thằng parentItem thì tk đó ko hoạt động và không ẩn menu 
                ngược lại thì sẽ đc ẩn
                */               
            if(parentItem) {
                event.preventDefault(); // làm cho tk đang xét ko hoạt động
            } else {
                hearderElement.style.height = null 
            }
        }
    }

   
    