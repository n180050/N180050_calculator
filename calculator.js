var screen=document.getElementById("s");
var buttons=document.querySelectorAll("button");
var screenValue="";
var r=/^\s*([-+]?)(\d+)(?:\s*([-+*\/])\s*((?:\s[-+])?\d+)\s*)+$/
for(item of buttons){
    item.addEventListener("click",(e)=>{
        buttonText=e.target.innerText;
        console.log("button text is ",buttonText)
        if(buttonText=="a"){
            buttonText="*";
            screenValue+=buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=="C"){
            screenValue="";
            screen.value=screenValue;
        }
        else if(buttonText=="="){
            if(r.test(screenValue)){
                screen.value=eval(screenValue);
                document.getElementById("s").style.border=" 5px solid green";
            }
            else{
                screen.value="Invalid";
                document.getElementById("s").style.border="5px solid red";
            }
        }
        else{
            screenValue+=buttonText;
            screen.value=screenValue;
        }
    })
}