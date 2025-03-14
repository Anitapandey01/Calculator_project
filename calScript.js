let input = document.getElementById('inputBox');/*because we give it by id*/
let buttons = document.querySelectorAll ('button');/*to select all button we take query selector not class name*/

let string = "";
let arr = Array.from(buttons);/*make arrays of all buttons*/
arr.forEach(button => {// for loop with arrow function
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);//javascript inbuilt function evaluate the string mathematically
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string
        }else if(e.target.innerHTML == 'del'){
            string = string.substring(0,string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }  
    })

})
