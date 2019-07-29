num1 = 20;
var num2 = 30;
result = num1 + num2;
document.write("The result is \n"+result);
document.write("<br>");
//single line
/*multi
line*/

            
var team1 = 99;
var team2 = 98;
if(team1>team2)
{
document.write(" team 1 is highest");
}
else
{
document.write("team 2 is highest");
}
document.write("<br>");


function add(one,two)
{
    var total = one + two;
    return total;
}

document.write(" Sum from function is "+ add(10,20));
document.write("<br>");


var amt=99;//float
var city="bangalore";//string
var state='karnataka';//string
var var1=true;//bool

// + - * / % = == > >= < <= && || !


var d=new Date();
document.write(d.getUTCDate());
//alert(d);
document.write("<br>");

var time=d.getHours();
//alert(time);
if(time<12)
    {
        document.write("good morning");
    }
else if(time>12 && time<18)
    {
        document.write("<b style='color:red'> good afternoon</b>");
    }
else
    {
        document.write("good evening");
    }
document.write("<br>");


//switch; more conditions, faster

var day ="Monday";
var a=parseInt(a);
switch (day)
    {
        case "Monday":
            document.write("Welcome to Monday");
            break;
        case "Thursday":
            document.write("Welcome to Thursday");
            break;
         case "Friday":
            document.write("Welcome to Friday");
            break;   
        default:
            document.write("Define your day");
    }
document.write("<br>");


/*iteration
while*/

var i=0;
while(i<=5)
    {
        document.write(i+" ");
        i++;
    }
document.write("<br>");

var i=0;
while(i<=10)
    {
        document.write(i+" ");
        i=i+2;
    }
document.write("<br>");

var i=11;
while(i>=3)
    {
        document.write(i+" ");
        i=i-2;
    }
document.write("<br>");

for(var i=0;i<10;i++)
    {
        document.write(i+" ");
    }

//string manipulation

city="bangalore";
//alert(city.toUpperCase());
//stringname.length
//text.indexOf("str") -- first occurrence of the str

var name="a is an awesome person";
var check=name.indexOf("an");
//alert(check);
document.write("<br>");


var email="aishwarya.jayashankar@gmail.com";
var checkat=email.indexOf("@");
var checkdot=email.indexOf(".");

if(checkat==-1||checkdot==-1||email.indexOf(" ")!=-1)
    document.write("invalid email");
else
    document.write("valid email");
document.write("<br>");

//array
var city=new Array("A","B",100,99);
document.write(city[2]+"<br>Pop: "+city.pop()+"<br>Shift: "+city.shift()+"<br>Push: "+city.push("C")+"<br>Sort: "+city.sort()+"<br>");


//objects
//boolean, navigator, screen, doc, 

document.write(navigator.appVersion+"<br>");
document.write(navigator.javaEnabled()+"<br>");
document.write(screen.width+"<br>"+screen.height);
//window.open and close