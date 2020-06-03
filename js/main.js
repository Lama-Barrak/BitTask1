
$(function(){
  getBpi("USD");
});
//get  api info with $.ajax
function getBpi(code)
{ $.ajax({
   url:"https://api.coindesk.com/v1/bpi/currentprice.json",
   dataType:"json",
   cashe:false,
   success:function(data,status)
   {var desc=data.bpi[code].description;
      var rate= data.bpi[code].rate;
     
      document.getElementById("desc").innerHTML=desc;
      document.getElementById("code").innerHTML=code;
      document.getElementById("rate").innerHTML=rate;},
      error:function(xhr,textStatus,err){
         $(".w1").show();
         console.log(xhr);
         console.log(textStatus);
         console.log(err);
        
      }

});

};
//get  api info with $.getjson
   /*$.getJSON("https://api.coindesk.com/v1/bpi/currentprice.json",function(data)
   {
      // console.log(data.bpi[code].rate);
      var desc=data.bpi[code].description;
      var rate= data.bpi[code].rate;
     
      document.getElementById("desc").innerHTML=desc;
      document.getElementById("code").innerHTML=code;
      document.getElementById("rate").innerHTML=rate;



   
           
         });*/
     // }

