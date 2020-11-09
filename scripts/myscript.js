$(document).ready(function(){

    $("#c-switch-1").click(function(){
        transMe();
      $("html").attr("data-color","set-1");
    });
    $("#c-switch-2").click(function(){
        transMe();
      $("html").attr("data-color","set-2");
    });
    $("#c-switch-3").click(function(){
        transMe();
      $("html").attr("data-color","set-3");
    });
    $("#c-switch-4").click(function(){
        transMe();
      $("html").attr("data-color","set-4");
    });
    function transMe(){
        $("html").addClass("transition");
    }

    // score settings 
    
    setInterval(function(){ 
        $(".head-score").each(function(){
            var $eventName = $(this).closest('.event-name');
            var $eventNumber = $(this).closest('.event-number');
            $(this).addClass( "flipInX").delay(1500)
            .queue(function() {
                $(this).removeClass("flipInX");
                $(this).dequeue();
            });
            //window.alert($eventName.hasClass("dis-none").toString());
            if($eventName.hasClass("dis-none")){
                window.alert("hello");
                $eventName.removeClass("dis-none");
                $eventNumber.addClass("dis-none");
            }
            else{
                $eventName.addClass("dis-none");
                $eventNumber.removeClass("dis-none");
            }
        });
    }, 4000);
    
  });


/*
let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}
*/

// score settings 
