var screen = document.getElementById('screen');
var operand= "";
screen.value=0;

 var clear = document.getElementById("clear");
    clear.onclick = function()
    {
        screen.value = 0;
        operand = ""
    }

document.onkeydown = function getValue(event)
{

        switch(event.key)
        {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '.':
            case '(':
            case ')':

                    operand = operand+event.key;
                    console.log(operand);
                    screen.value = operand;
                    break;
           case '+':
           case '-':
           case '*':
           case "/":
           case '%':
                    evaluation(operand);
                    console.log("calling evaluation");
                    operand = operand+event.key;
                    screen.value = operand;
                   
                   
                    break;
            case '=':
                        
                    evaluation(operand);
                  
                    break;
            case 'Backspace':
                      operand = deleteNumber(operand)
                      screen.value = operand;
                     console.log(operand)
                    break;

            
        }

     }
   
     function evaluation(opr)
      {
          try
          {
          var result = eval(opr);
          screen.value = result;
          operand = result;
          }
          catch(err)
          {
         errorHandling(err);
          }
      }
      
      function errorHandling(err)
      {
          console.log(err.message);
          screen.value = "Please enter valid Input again";
          operand = 0;
          getValue(event);

      }

      function deleteNumber(opr)
      {
          return  opr.slice(0, opr.length-1);
      }


     