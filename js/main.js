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


console.log("executing main.js")
$(document).Ready(function () {
    

    $btns.click(function (e) {
        $(".project-area .button-group button").removeClass("active");
        e.target.classList.add("active");

        let selector = $(e.target).attr("data-filter");
        $(".project-area .grid").isotope( {
            filter : selector
        });
        
        return false;
    })

});


$(".project-area .grid .test-popup-link").magnificPopup({
    type: 'image',
    gallery:{enabled:true}
    
  });