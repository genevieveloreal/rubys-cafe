RUBYS = {
    init:function() {
        $('.scrollTo').on('click', this.scrollTo.bind(this));
    },

    scrollTo: function(element) {
        element.preventDefault();
        var target = $(element.target).data('target');

        window.scroll({
            top: document.querySelector(target).offsetTop - 50,
            behavior: 'smooth'
        });

        // Not a massive fan of this. 
        /** 
            document.querySelector(target).scrollIntoView({ 
                behavior: 'smooth' 
            });
        **/
    }
}

$(document).ready(function(){
    RUBYS.init();
})