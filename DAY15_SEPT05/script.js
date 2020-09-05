var count = 10;
var text = document.getElementById("textArea")
var btn = document.getElementById("myBtn")

function audio()
{
         var sound = document.createElement("audio")
    sound.setAttribute("autoplay", true);
   
    var src = document.createElement("source")
    src.setAttribute("src","audio.mp3"),
    sound.append(src);
    document.body.append(sound);
}
btn.addEventListener("click", function() { setTimeout((count)=>{
    btn.parentNode.removeChild(btn)
    text.innerText = count + " Seconds Remaining for New Year";
    console.log(count);
        count--;
        
        setTimeout((count)=>{
           text.innerText = count + " Seconds Remaining for New Year";
            console.log(count)
            count--;

            setTimeout((count)=>{
                text.innerText = count + " Seconds Remaining for New Year";
                 console.log(count)
                 count--;   

                 setTimeout((count)=>{
                    text.innerText = count + " Seconds Remaining for New Year";
                     console.log(count)
                     count--;

                     setTimeout((count)=>{
                        text.innerText = count + " Seconds Remaining for New Year";
                         console.log(count)
                         count--;

                         setTimeout((count)=>{
                            text.innerText = count + " Seconds Remaining for New Year";
                             console.log(count)
                             count--;

                             setTimeout((count)=>{
                                text.innerText = count + " Seconds Remaining for New Year";
                                 console.log(count)
                                 count--;
                             
                                 
                                    setTimeout((count)=>{
                                        text.innerText = count + " Seconds Remaining for New Year";
                                        console.log(count)
                                        count--;
                                        
                                        setTimeout((count)=>{
                                            text.innerText = count + " Seconds Remaining for New Year";
                                            console.log(count)
                                            count--;
                                            
                                            setTimeout((count)=>{
                                                text.innerText = count + " Seconds Remaining for New Year";
                                                console.log(count)
                                                count--;

                                                setTimeout((count)=>{
                                                    text.innerText = "Happy New Year";
                                                    audio();
                                                    
                                                    
                                                },1000,count)
                                            },1000, count)
                                        },1000, count)
                                    },1000, count)
                                 },1000, count)
                            },1000, count)
                        },1000, count)
                    },1000, count)   
                },1000, count)      
        },1000, count)
},1000, count)})



