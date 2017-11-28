var lastColor;
var isWanderingDown = false;
var lastDivShown;
var lastBallPressed;
//var iframes = $('.vimeovideo');
//var videoInterview = Wistia.api("kes9orusuq");

//console.log(videoInterview);

$("#textBehindTheScenes").mouseover(function() {
  $('#textBehindTheScenes').each(function(){
    $(this).find('a').css("color","grey");
});
});

$("#textBehindTheScenes").mouseout(function() {
  $('#textBehindTheScenes').each(function(){
    var linkArray = $(this).find('a');
    linkArray[0].style.color = "white";
    linkArray[1].style.color = "black";
});
});

function wanderingDown()
{
  $("#xmarksspot").fadeIn("slow");
  $("#titleWandering").animate({ "bottom": "-=37vw" }, "slow", function(){
  }
  );

  isWanderingDown = true;

}

function wanderingUp()
{
  $("#xmarksspot").fadeOut("slow");
  $("#titleWandering").animate({ "bottom": "+=37vw" }, "slow",function()
  {

  }
  );

  isWanderingDown = false;

  /*iframes.each(function() {
    var player = $f(this);
    player.api("pause");
  });*/
}

function showThisDiv(divToShow)
{
  $("#"+divToShow+"Div").fadeIn("slow");
  lastDivShown = divToShow;
}

function hideThisDiv()
{
  $("#"+lastDivShown+"Div").fadeOut("slow");
}

$('#ballOverlay').click(function() {

   if(isWanderingDown)
   {
     wanderingUp();
     hideThisDiv();
     $("#"+lastBallPressed).bind( "mousedown", onBallMouseDown );
     $(".clickableItem").bind( "mousedown", onBallMouseDown );
     $("#"+lastBallPressed).children(".ball").css("background-color", lastColor);
     $("#"+lastBallPressed).children(".hoveringMenuText").fadeOut();
     $("#ballOverlay").hide();
   }
});



$( "#fbicon" ).mouseover(function() {
  $( "#fbicon" ).attr('src', 'img/f-blue.png');
});

$( "#fbicon" ).mouseout(function() {
  $( "#fbicon" ).attr('src', 'img/f.png');
});

aFlag = true;

$(".clickableItem").hover(function() {

        if(!isWanderingDown)
        {
          $(this).children(".hoveringMenuText").fadeIn();
          lastColor = $(this).children(".ball").css("background-color");
          $(this).children(".ball").css("background-color", "black");
        }

    }, function() {
      if(!isWanderingDown)
      {
          $(this).children(".ball").css("background-color", lastColor);
          $(this).children(".hoveringMenuText").fadeOut();
      }
});

$("#xmarksspot").mousedown(xmarksspotclick);
function xmarksspotclick()
{
  if(isWanderingDown)
  {
    wanderingUp();
    hideThisDiv();
    $("#"+lastBallPressed).bind( "mousedown", onBallMouseDown );
    $(".clickableItem").bind( "mousedown", onBallMouseDown );
    $("#"+lastBallPressed).children(".ball").css("background-color", lastColor);
    $("#"+lastBallPressed).children(".hoveringMenuText").fadeOut();
    $("#ballOverlay").hide();
  }


}

$(".clickableItem").mousedown(onBallMouseDown);
function onBallMouseDown()
{
  if($(this).attr('id') != "theShop" && !isWanderingDown)
  {

    wanderingDown();
    isWanderingDown = true;
    $("#ballOverlay").show();
    lastBallPressed = $(this).attr('id');
    $(this).unbind( "mousedown" );
    $(".clickableItem").unbind( "mousedown" );
    showThisDiv($(this).attr('id'));
  }
}

function playTrailer()
{
  //video.play();
  /*var player = $f(iframes[1]);
  player.api("play");*/
}

function playInterview()
{
  //video.pause();
  //videoInterview.play();
  /*var player = $f(iframes[0]);
  player.api("play");*/
}

window._wq = window._wq || [];
_wq.push({ id: "_all", onReady: function(video) {
  // for all existing and future videos, run this function
  video.bind('play', function() {
    // when one video plays, iterate over all the videos and pause each,
    // unless it's the video that just started playing.
    var allVideos = Wistia.api.all();
    for (var i = 0; i < allVideos.length; i++) {
      if (allVideos[i].hashedId() !== video.hashedId()) {
        allVideos[i].pause();
      }
    }
  });
}});
