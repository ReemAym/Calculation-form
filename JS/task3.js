// var x = document.querySelector(".in");
// x.addEventListener("change", disable);

// function disable(e)
// {
//     e.preventDefault();

//     if(document.getElementById("input1").value!=""&& document.getElementById("input2").value!="")
//     {
//         document.getElementById("reset").disable=false;
//     }
//     if(document.getElementById("reset").disable==false)
//     {
//         document.getElementById("reset").style.backgroundColor= "rgb(113, 199, 180)";
//     }
// }


function check_num()
{
    var numPeople= parseInt(document.getElementById("input2").value);
    
    if(numPeople==0)
    {
        document.getElementById("error-message").style.color="red";
        document.getElementById("input2").style.borderColor = "red";
        document.getElementById("error-message").style.float="right";
        document.getElementById("error-message").innerHTML="Can't be zero";

    }
}

function calculate_custom()
{
    var bill= parseFloat(document.getElementById("input1").value);
    var percantage= parseFloat(document.getElementById("custom_percent").value);
    var numPeople= parseInt(document.getElementById("input2").value);
    document.getElementById("tip").innerHTML=(bill*(percantage/100))/numPeople;
    document.getElementById("total").innerHTML=(bill+bill*(percantage/100))/numPeople;

}

var a = document.querySelector(".btn1");
a.addEventListener("click", calculate_5);
function calculate_5(e)
{
    e.preventDefault();
    var bill= parseFloat(document.getElementById("input1").value);
    var numPeople= parseInt(document.getElementById("input2").value);
    document.getElementById("tip").innerHTML=(bill*(5/100))/numPeople;
    document.getElementById("total").innerHTML=(bill+bill*(5/100))/numPeople;
}


var b = document.querySelector(".btn2");
b.addEventListener("click", calculate_10);
function calculate_10(e)
{
    e.preventDefault();
    var bill= parseFloat(document.getElementById("input1").value);
    var numPeople= parseInt(document.getElementById("input2").value);
    document.getElementById("tip").innerHTML=(bill*(10/100))/numPeople;
    document.getElementById("total").innerHTML=(bill+bill*(10/100))/numPeople;
}



var c = document.querySelector(".btn3");
c.addEventListener("click", calculate_15);
function calculate_15(e)
{
    e.preventDefault();
    var bill= parseFloat(document.getElementById("input1").value);
    var numPeople= parseInt(document.getElementById("input2").value);
    document.getElementById("tip").innerHTML=(bill*(15/100))/numPeople;
    document.getElementById("total").innerHTML=(bill+bill*(15/100))/numPeople;
}



var d = document.querySelector(".btn4");
d.addEventListener("click", calculate_25);
function calculate_25(e)
{
    e.preventDefault();
    var bill= parseFloat(document.getElementById("input1").value);
    var numPeople= parseInt(document.getElementById("input2").value);
    document.getElementById("tip").innerHTML=(bill*(25/100))/numPeople;
    document.getElementById("total").innerHTML=(bill+bill*(25/100))/numPeople;
}



var f = document.querySelector(".btn5");
f.addEventListener("click", calculate_50);
function calculate_50(e)
{
    e.preventDefault();
    var bill= parseFloat(document.getElementById("input1").value);
    var numPeople= parseInt(document.getElementById("input2").value);
    document.getElementById("tip").innerHTML=(bill*(50/100))/numPeople;
    document.getElementById("total").innerHTML=(bill+bill*(50/100))/numPeople;
}

