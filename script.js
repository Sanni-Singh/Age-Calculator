const input = document.getElementById('date')
const button = document.getElementById('button');
const textVal = document.getElementById('number');

let time;
const today = new Date().getFullYear();
input.addEventListener('input',(e)=>{
    let day = new Date(e.target.value);
    
    time = day.getFullYear();
    
})
button.addEventListener('click',()=>{
    if(time === undefined) alert("Please enter your birthday")
    else textVal.innerText = today - time;
    
})
