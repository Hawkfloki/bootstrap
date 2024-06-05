function getdata() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var show = document.getElementById("show").innerHTML = name + phone + email;
}


function number() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;

    if (
        number1 > number2) {
        document.getElementById('number3').innerHTML = number1;
    }
    if (number2 > number1) {
        document.getElementById('number3').innerHTML = number2;
    }
}

function sum(){
    let n1=parseInt(document.getElementById("n1").value);
    let n2= parseInt(document.getElementById("n2").value);
    let n3=parseInt(document.getElementById("n3").value);
    let n4=parseInt(document.getElementById("n4").value);
    let sum=n1+n2;
    let sum2=n3+n4;
    document.getElementById("showsum").innerHTML=sum;
document.getElementById("showsum2").innerHTML=sum2;
}
function percentage() {
    let n1=parseInt(document.getElementById("n1").value);
    let n2= parseInt(document.getElementById("n2").value);
    let m=n1+n2;


    let percentage=(m/200)*100;
    let n3=parseInt(document.getElementById("n3").value);
    let n4=parseInt(document.getElementById("n4").value);
    let m2=n3+n4;
    let percentage2=(m2/200)*100;
    document.getElementById("show%").innerHTML=percentage
    document.getElementById("show%2").innerHTML=percentage2
}
function divi(){
    if(
        percentage >"90"
    ){
        document.getElementById("division1").innerHTML="First Division";
        document.getElementById("division2").innerHTML="First Division";

    }


}
