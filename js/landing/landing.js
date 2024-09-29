
$(".tab_content").hide();
$(".tab_content:first").show();

/* if in tab mode */
$("ul.tabs li").click(function () {

    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();

    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("active");
    $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("active");

});
/* if in drawer mode */
$(".tab_drawer_heading").click(function () {

    $(".tab_content").hide();
    var d_activeTab = $(this).attr("rel");
    $("#" + d_activeTab).fadeIn();

    $(".tab_drawer_heading").removeClass("active");
    $(this).addClass("active");

    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
});



$('ul.tabs li').last().addClass("tab_last");

var accordionBlocks = document.querySelectorAll('.accordion__block');
var accordionTxts = document.querySelectorAll('.accordion__txt'); // Select all accordion texts

accordionBlocks.forEach(function(accordionBlock, index) {
    accordionBlock.addEventListener('click', function() {
        accordionTxts[index].classList.toggle('active'); // Toggle based on the index
    });
});




