function calcRouteB() {
	
    var strText = document.getElementById("name").value;
    var strText1 = document.getElementById("p").value;
    var strText2 = document.getElementById("location-1").value;
    var strText3 = document.getElementById("location-2").value;
    var strText4 = document.getElementById("pickupdate").value;
    var strText6 = document.getElementById("pickuptime").value;
    var strText7 = document.getElementById("cars").value;
    var strText8 = document.getElementById("ser").value;
    var Clink="https://connectingcabs.in";
    var CPh="9008441063";
    var Cname="connectingcabs";
   var CID =Math.floor((Math.random()*1000000)+1);
    if((strText7=="Sedan") && (strText8=="One-Way"))
    {rate=sedano;}
    else if((strText7=="Sedan") && (strText8="Round"))
    {rate=sedanr;}
    else if((strText7=="SUV") && (strText8=="One-Way"))
    {rate=suvo;}
    else if((strText7=="SUV") && (strText8=="Round"))
    {rate=suvr;}
    else if(strText7=="Traveller")
    {rate=traveller;}
console.log("read successful");
    var result = 'Customer Name:  ' + strText + '%0APhone Number: ' + strText1 +'%0APickup Location: ' + strText2+  '%0ADrop Location: ' + strText3 + '%0APickup Date: ' + strText4 + '%0APickup Time: ' + strText6 +'%0AService: ' + strText8 + '%0ACars: ' + strText7 +'%0ARate: ' + rate;

        var finalMsg = encodeURI(result);
        document.getElementById("bookingForm").addEventListener("submit", (e) => {
        e.preventDefault();
        if(strText==""||strText1==""||strText2==""||strText3==""||strText4==""||strText6=="")
        {
        console.log('Fill blank Field');
        }else
        {
        const request = new XMLHttpRequest();
	     	const url = ' https://api.telegram.org/bot1750130456:AAHZBIWQfUuMKsQ8o9v978n04M0Wiorh03w/sendMessage?chat_id=-457910063&text='+result;
         
        request.open("post", url);
        request.send();
	    	console.log("Sent Telegram successfully");
		
		//console.log("Sent Telegram successfully");
     //   fetch("https://www.fast2sms.com/dev/bulk?authorization=tXGFnAr4LNYZM8Q9jwPVHxWdvs6eahl2qk5of7SzpRbOUEumITTnoiOFHqdCLhzJPgaxer2mpZ8UNEyf&sender_id=FSTSMS&message="+Clink+"/%0AContact No: "+CPh+"%0AHello "+strText+",%0AThank you for Booking with "+Cname+".Your "+strText2+" Booking has been Confirmed on "+strText4+".&language=english&route=p&numbers="+strText1)
		fetch("https://www.fast2sms.com/dev/bulkV2?authorization=tXGFnAr4LNYZM8Q9jwPVHxWdvs6eahl2qk5of7SzpRbOUEumITTnoiOFHqdCLhzJPgaxer2mpZ8UNEyf&route=dlt&sender_id=SMSTRS&message=126247&variables_values=%20" + strText + "%20%7C%20" + Clink + "%20%7C%20" + CID + "%20%7C%20" + strText + "%20%7C%20" + strText1 + "%20%20%7C%20" + strText2 + "%20%7C%20" + strText3 + "%20%20%7C%20" + strText4 + "%20%20%20" + strText6 + "%20%20%7C%20" + strText7 + "%20%20%20%20" + strText8 + "%20%20%7C%20" + n + "%20%7C" + rate + "%7C" + 15 + "%7C" + 450 + "%7C%20" + CPh + "%20" + "%20%7C&flash=0&numbers=" + strText1)
			.then(response=>{
			if(response.status==200)
			{
			 $(".myAlert-top").show();
			  setTimeout(function(){
			    $(".myAlert-top").hide(); 
			  }, 5000);
			console.log("myAlert-top");
			//window.location.href = "bc.html";
		
				console.log("Sent Message successfully");
				
				localStorage.setItem("result", strText);
				localStorage.setItem("result1", strText2);
				localStorage.setItem("result2", strText3);
				localStorage.setItem("result3", strText7);
				localStorage.setItem("result4", strText8);
				window.location.href = "bc.html";
			}
		})    		
        }
    });
    }       
   

