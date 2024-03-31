let pwd=document.querySelector(".pwd");
let link=document.querySelector(".link");
let btn=document.querySelector(".btn");
let output=document.querySelector(".output");
let count=0;
let validation=() =>
{     
       count++
       console.log(count); 
    
    output.textContent="checking password"
     setTimeout(() => {
      
    if(pwd.value=="leon")
    {   
        link.style="visibility:visible;"
         output.textContent="success"
         output.style="color:green"
    }
    else
    {
       if( link.style="visibility:visible;")
       {
        link.style="visibility:hidden;"
       }
       if(count===3 && pwd.value!=="leon")
       {
           window.close("https://deepakvishwakarma123.github.io/music/")
       }
     
       output.textContent="please enter correct password"
       output.style="color:red";
    }
}
    
, 2000);


}


    
btn.addEventListener('click',validation)