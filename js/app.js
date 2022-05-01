var app = {
    displayKnowMoreSection: function(event){
        let element  = event.target;
        let parentNode = $(element).parents(".product");
        console.log(parentNode.find(".section-container"))
        parentNode.find(".section-container")[0].classList.add("hidden");
        parentNode.find(".know-more-wrapper")[0].classList.remove("hidden");

        if(parentNode[0].classList.contains("section-three")) {
            parentNode[0].classList.add("h-extra-three");
        } else if(parentNode[0].classList.contains("section-five")) {
            parentNode[0].classList.add("h-extra-five");
        }
    },
    init: function() {
        let that = this;
        $(".action-link-product-cat").on("click", function(event){
            that.displayKnowMoreSection(event);
        });
    }
}

$(document).ready(function(){
    app.init();
})