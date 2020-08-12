function calculation(a,b) {
    var opr1 = 10;
    var opr2 = 90;
    switch(a)
    {
     case 1:
        add(opr1,opr2);
        break;
    case 2:
        sub(opr1,opr2);
        break;
    case 3:
        mul(opr1,opr2);
        break;
    case 4:
        div(opr1,opr2);
        break;
    case 5:
        mod(opr1,opr2);
        break;
    default:
        console.log("Please enter a valid operation")
    }
    } 
    function add(a,b)
    {console.log(a+b);}
    function sub(a,b)
    {console.log(a-b);}
    function mul(a,b)
    {console.log(a*b);}
    function div(a,b)
    {console.log(a/b);}
    function mod(a,b)
    {console.log(a%b);}


    let arr= ["add","sub","mul","div","mod"];
    calculation(1,arr);
    calculation(2,arr);
    calculation(3,arr);
    calculation(4,arr);
    calculation(5,arr);
    calculation(6,arr);
    