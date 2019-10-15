
$("button").click(function() {
   var age;
   var shot;
   var age=$(".numberOne").val();
   var shot=$(".numberTwo").val();
   if(age>=30 && shot==="Forehand"||shot==="forehand"||shot==="Backhand"||shot==="backhand"||shot==="Serve"||shot==="serve"){
       $(".result").text("You're the GOAT: Serena Williams. You're a diva and not afraid to show your emotion. Sure, you  might be a little washed-up now having lost your last  4 Grand Slam finals, but you are still basically the only player anyone cares about.Long Live The Queen!");
       $(".result").css("color","white");
       $(".serena").show();}
        if (age<30 && age>=25 && shot==="Serve"){
          $(".result").text("You're Naomi Osaka! You have an explosive serve and forehand and might be the next GOAT...but you're also inconsistent, emotional, and an awkward mess during interviews.");
       $(".result").css("color","white");
       $(".naomi").show();}
       else if (age<30 && age>=25 && shot==="Forehand"||shot==="forehand"||shot==="Backhand"||shot==="backhand"){
          $(".result").text("You're Sloane Stephens! Your booming forehand and incredible speed have taken you to a US Open title, but it often seems like you really don't care about this whole tennis thing. Maybe one day you'll get it together for good!");
       $(".result").css("color","white");
       $(".sloane").show();}
     else if (age<25 && age>=20 && shot==="Backhand"||shot==="Serve"||shot==="Forehand"||shot==="backhand"||shot==="serve"||shot==="forehand"){
          $(".result").text("You're Naomi Osaka! You have an explosive serve and forehand and might be the next GOAT...but you're also inconsistent, emotional, and an awkward mess during interviews.");
       $(".result").css("color","white");
       $(".naomi").show();}
       else if (age<20 && shot==="Forehand"||shot==="forehand"){
          $(".result").text("You're Naomi Osaka! You have an explosive serve and forehand and might be the next GOAT...but you're also inconsistent, emotional, and an awkward mess during interviews.");
       $(".result").css("color","white");
       $(".naomi").show();}
        else if (age<20 && shot==="Backhand"||shot==="backhand"){
          $(".result").text("You're Coco Gauff!There is tons of hype around you because you're young and tennis is starved for a new, exciting star. Time will tell if you're actually the next great, but you have a good head on your shoulders and strong desire to win. Now please go fix your forehand!");
       $(".result").css("color","white");
       $(".coco").show();}
});