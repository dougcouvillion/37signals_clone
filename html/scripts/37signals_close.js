$(document).ready(function() {
    /*-----------------------------------------------------------------------------*/
    /* As soon as the DOM is loaded we need to hide the product specific headlines */
    /*-----------------------------------------------------------------------------*/
    $(".headline_product").hide();

    /*--------------------------------------------------------------------------------------------------*/
    /* When the user's mouse moves over a product link we want to change the headline above the product */
    /* links so information about the specific product is displayed.                                    */
    /*--------------------------------------------------------------------------------------------------*/
    $(".product_link").on('mouseover',function(){
       /*--------------------------------------------------------------------*/
       /* hide the closest headline and show this product's headline instead */
       /*--------------------------------------------------------------------*/
       var productHeadlineDiv = $(this).data("headline");
       $(this).closest("div").find(".headline").hide();
       $(productHeadlineDiv).show();
    });

    /*--------------------------------------------------------------------------------------------*/
    /* When the user's mouse leaves the product link we need to hide that product information and */
    /* redisplay the original information.                                                        */
    /*--------------------------------------------------------------------------------------------*/
    $("#link_basecamp").on('mouseout', function() {
       $(".headline_product").hide();
       $(this).closest("div").find(".headline").show();
    });
});