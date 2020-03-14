//SLIDE BUTTON
$(".dollar-button").click(function(){
    $(".dollar").css("color","#ffffff");
    $(".lighting").css("color","#02aaaa80");
    $(".container-buttons-bg").animate({right:"45px"});

});
$(".thunder-button").click(function(){
    $(".lighting").css("color","#ffffff");
    $(".dollar").css("color","#02aaaa80");
    $(".container-buttons-bg").animate({right:"0px"});
});
//LINES UNDER ICONS
$(".col-icons-second").mouseenter(function(){
    $(".col-row1").removeClass('inside-col');
    $(".col-row2").addClass('inside-col');
    $(".col-row3").removeClass('inside-col');
});
$(".col-icons-first").mouseenter(function(){
    $(".col-row2").removeClass('inside-col');
    $(".col-row1").addClass('inside-col');
    $(".col-row3").removeClass('inside-col');
});
$(".col-icons-third").mouseenter(function(){
    $(".col-row2").removeClass('inside-col');
    $(".col-row3").addClass('inside-col');
    $(".col-row1").removeClass('inside-col');
});
 
    