$( function() {
    $( "#posX" ).draggable({
        axis:"x",
        containment: "parent"
    });

    $("#posX").on("drag", function(){
        $(".full").css("width",$("#posX" ).css("left"))
    })
  } );

 $(document).ready(function(){
    $(".burger").click( function(){
        $(".burger").toggleClass("clicked");
        $("nav").toggleClass("active-nav");
    })
    $("input[type=number").keyup(function() {
        $("input[type=number").val(this.value.match(/[0-9]*/));
    });
    $("a[href^='#']").click(function(e){
        $(".active").removeClass("active");
        $(e.currentTarget).parent("li").addClass("active");
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
});
    $("nav a").click( function(){
        $(".burger").click();
    })
 })