let display= document.querySelector('.displaybox');
const buttons = document.querySelectorAll('.outerbox button');

const ac= buttons[0];
ac.addEventListener('click', function(e){
    display.innerHTML="";
});

const del= buttons[1];
del.addEventListener('click', function(e){
    display.innerHTML= display.innerHTML.slice(0, -1);
});

const equalsTo= document.querySelector('#orange');

equalsTo.addEventListener('click', function(e){
    try{
        display.innerHTML= eval(display.innerHTML);
    }
    catch{
        display.innerHTML="ERROR";
    }
});

for(let i=2; i<buttons.length-1; i++){
    buttons[i].addEventListener('click', function(e){
        display.innerHTML+=e.target.innerHTML;
    });
}








