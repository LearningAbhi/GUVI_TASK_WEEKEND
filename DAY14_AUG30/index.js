
var container = document.createElement("div");
//container.classList.add("col-12");
container.classList.add("container");
container.innerHTML = "<h1>Calculator</h1>"
document.body.append(container);

var calculator = document.createElement("div");
container.classList.add("col-lg-6");
container.classList.add("calculator");
container.append(calculator)

var screen = document.createElement("input");
screen.setAttribute("type","text");
screen.setAttribute("id","screen");
screen.setAttribute("readonly", "true")
calculator.append(screen);


var table = document.createElement("table");
//table.classList.add("table");
//table.classList.add("table-bordered")
table.classList.add("table-sm")
calculator.appendChild(table);

var row_1 = document.createElement("tr");
table.append(row_1);

function createText(value, style, id)
{
var td = document.createElement("td")
var content = document.createElement("button")
content.setAttribute("type", "button")
content.setAttribute("id", id)
content.innerHTML = value

content.classList.add("btn")
content.classList.add(style)
content.classList.add("button")
td.append(content)
return td;

}

var td1 = createText("C", "btn-outline-primary", "clear");
var td2 = createText("X","btn-outline-danger","backspace");
var td3 = createText("(","btn-outline-primary","bracket1");
var td4 = createText(")","btn-outline-danger","bracket2");
row_1.append(td1,td2,td3,td4)


var row_2 = document.createElement("tr");
table.append(row_2);
var td5 = createText("1", "btn-outline-success", "one");
var td6 = createText("2","btn-outline-warning","two");
var td7 = createText("3","btn-outline-success","three");
var td8 = createText("+","btn-outline-warning","plus");
row_2.append(td5,td6,td7,td8)


var row_3 = document.createElement("tr");
table.append(row_3);
var td9 = createText("4", "btn-outline-info", "four");
var td10 = createText("5","btn-outline-dark","five");
var td11 = createText("6","btn-outline-info","six");
var td12 = createText("-","btn-outline-dark","minus");
row_3.append(td9,td10,td11,td12)

var row_4 = document.createElement("tr");
table.append(row_4);
var td13 = createText("7", "btn-outline-primary", "seven");
var td14 = createText("8","btn-outline-success","eight");
var td15 = createText("9","btn-outline-warning","nine");
var td16 = createText("*","btn-outline-info","mul");
row_4.append(td13,td14,td15,td16)

var row_5 = document.createElement("tr");
table.append(row_5);
var td17 = createText(".", "btn-outline-primary", "decimel");
var td18 = createText("0","btn-outline-success","zero");
var td19 = createText("=","btn-outline-warning","equal");
var td20 = createText("/","btn-outline-info","div");
row_5.append(td17,td18,td19,td20)



     
      document.onkeydown = function toggle(event)
      {
          if(event.key == "1")
           {
               document.getElementById("one").click();
           }
      }



