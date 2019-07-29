num1 = 20;
var num2 = 30;
result = num1 + num2;
document.write("The result is \n"+result);
//single line
/*multi
line*/
            
var team1 = 99;
var team2 = 98;
if(team1>team2)
{
document.write(" team one is highest");
}
else
{
document.write("team 2 is highest");
}

function add(one,two)
{
    var total = one + two;
    return total;
}

document.write(" Sum from function is "+ add(10,20));

var amt=99;//float
var city="bangalore";//string
var state='karnataka';//string
var var1=true;//bool

// + - * / % = == > >= < <= && || !

var d=new Date();
//alert(d);

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

