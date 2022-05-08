var app = {
    displayKnowMoreSection: function(event){
        let element  = event.target;
        let parentNode = $(element).parents(".product");
        parentNode.find(".section-container")[0].classList.add("hidden");
        parentNode.find(".know-more-wrapper")[0].classList.remove("hidden");

        if(parentNode[0].classList.contains("section-three")) {
            parentNode[0].classList.add("h-extra-three");
        } else if(parentNode[0].classList.contains("section-five")) {
            parentNode[0].classList.add("h-extra-five");
        }
    },
    handleHamburgerMenu: function(event){
        let openIcon = $(".hamb-icon.open-icon")[0];
        let closeIcon = $(".hamb-icon.close-icon")[0];
        let hamburgerMenu = $(".hamburger-menu")[0];
        let currentElement = event.target;
        console.log(currentElement)
        if($(currentElement)[0].classList.contains("open-icon")){
            openIcon.classList.remove("active");
            closeIcon.classList.add("active");
            hamburgerMenu.classList.add("active");
        } else {
            closeIcon.classList.remove("active");
            openIcon.classList.add("active");
            hamburgerMenu.classList.remove("active");
        }
    },
    init: function() {
        let that = this;
        $(".action-link-product-cat").on("click", function(event){
            that.displayKnowMoreSection(event);
        });
        $(".hamb-icon").on("click", function(event){
            that.handleHamburgerMenu(event);
        });
    }
}

$(document).ready(function(){
    app.init();
})