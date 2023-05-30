//navbar
function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50 ||
        document.body.clientTop  >= 50 ||
        document.documentElement.clientTop >= 50
    ) {
        navbar.classList.add("nav-sticky");
    } else {
        navbar.classList.remove("nav-sticky");
    }
    const number = document.getElementById("number_phone");
    if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50 ||
        document.body.clientTop  >= 50 ||
        document.documentElement.clientTop >= 50
    ) {
        number.classList.add("phone");
    } else {
        number.classList.remove("phone");
    }
}
window.addEventListener("scroll", (ev) => {
    ev.preventDefault();
    windowScroll();
})
window.addEventListener("DOMContentLoaded", (ev ) => {
    ev.preventDefault();
    windowScroll();
});
    const navLinks = document.querySelectorAll('.nav-item:not(.dropdown)');
    const menuToggle = document.getElementById('navbarSupportedContent');
    const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});
    navLinks.forEach(function (l) {
        l.addEventListener('click', function () {
            if (menuToggle.classList.contains('show')) {
                bsCollapse.toggle();
            }
        });
    });


$('.owl-carousel').owlCarousel({
    loop:true,
    center: true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        991:{
            items:3
        }
    }
})

document.querySelector("#sign_up").onclick = function()
{
    document.querySelector('#submit').innerHTML = 'Записаться';
}

$('.submit_application').on('click', function() {
    document.querySelector('#submit').innerHTML = 'Оставить заявку';
})

$(function() {
    jQuery(function($) {
        $('#name').on('keypress', function() {
            var that = this;
            setTimeout(function() {
                var res = /[^А-ЯЁа-яё\s ]/g.exec(that.value);
                that.value = that.value.replace(res, '');
            }, 0);
        });
    });
})

$(document).ready(function() {
    $("#phone_number").mask("+375 (99) 999-99-99");
});

$(document).ready(function(){
    $(".contact_form").submit(function(event) {
        event.preventDefault();

        var form_data = $(this).serialize();

        $.ajax({
            type: "POST",
            url: "php/contact.php",
            data: form_data,
            success: function() {
                $('#contactform').modal('hide');
                $('.form-control').val('');
            }
        });
    });
});

$(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");               
    var _opened = $navbar.hasClass("show");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
        $navbar.collapse('hide');
    }
});