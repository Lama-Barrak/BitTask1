
$(function(){
    getBpi("USD");
    
  });
 async function getBpi(co)
{
await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  .then(response => response.json())
  .then(data => setData(data,co))
  .catch(err => error());
}
//set data when fetch is success
  function setData(data,c)
{$(".w1").hide();
  var desc=data.bpi[c].description;
    var rate= data.bpi[c].rate;
    $("#desc").html(desc)
    $("#code").html(c);
    $("#rate").html(rate);
       /*document.getElementById("desc").innerHTML=desc;
       document.getElementById("code").innerHTML=c;
       document.getElementById("rate").innerHTML=rate;*/   
}
// function called if something is wrong
function error()
{$(".w1").show();
console.log('Error')}
