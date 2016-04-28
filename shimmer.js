$(document).ready(function() {
            
    (function() {

        //add css animation rule to header
        $('<style>@keyframes shimmerFadeIn {from {opacity:0;} to {opacity:1;}}</style>').appendTo('head');

        //get all text with the 'fancy-text' class
        $('.shimmer-text').each(function (n) {
            var characters = $(this).text().split("");
            $this = $(this);
            $this.empty();
            $.each(characters, function (m, text) {
                //wrap each individual letter in spans
                $this.append("<span class='st-fadeIn'>" + text + "</span>");
            });
        });

        //hide individual characters initially
        $('.st-fadeIn').css("opacity", "0");

        //speed at which entire text body becomes fully visible
        var duration = 0.7; 

        $('.st-fadeIn').each(function() {
            //trigger fade in animation for each letter at random
            var delay = Math.random();
            $(this).css({"animation-name": "shimmerFadeIn", 
                        "animation-duration": duration + "s",
                        "animation-delay": delay + "s",
                        "-webkit-animation-fill-mode": "forwards"});
        });
        
    })();
    
});