
console.log("executing main.js")
$(document).ready(function () {

    let $btns = $(".project-area .button-group button");


    $btns.click(function (e) {


        $(".project-area .button-group button").removeClass("active");
        e.target.classList.add("active");

        let selector = $(e.target).attr("data-filter");
        $(".project-area .grid").isotope( {
            filter : selector
        });
        
        return false;
    })



    $("project-area .button-group #btn 1").trigger("click");

    $(".project-area .grid .test-popup-link").magnificPopup({
    type: 'image',
    gallery:{enabled:true}
  });
  const showMenu = (toggled, navId) =>{
    const toggle = document(toggleId),
    nav = document.getElementById(navId)

        if(toggle && nav){
        toggle.addEventListener("click" , ()=>{
            nav.classList.toggle("show")
            })
        }
    }
    showMenu("navbarNav")

    // sticky navbar menu

    let nav_offset_top = $(".header_area").height() + 50;

    function navbarFixed() {
    if($(".header_area").length){
        $(window).scroll(function () {
            let scroll = $(window).scrollTop();
            if(scroll >= nav_offset_top){
                $(".header_area .main-menu").addClass("navbar_fixed");
            }else{
                $(".header_area .main-menu").removeClass("navbar_fixed");
            }
            
            
        })
    }
    
}
    navbarFixed();
});