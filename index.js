
$("#scroll-icon, .main-title-container button").click(()=>{
    $('html, body').animate({
        scrollTop: $('.food-row').offset().top,
    })
})

const mobileNav = document.querySelector('.mobile-navigation ul');

document.querySelector('.mobile-navigation i').addEventListener('click',()=> {
    mobileNav.classList.contains('show') ? mobileNav.classList.remove('show') : mobileNav.classList.add('show')
});

ScrollReveal().reveal('.food-row');