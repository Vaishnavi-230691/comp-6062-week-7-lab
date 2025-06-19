console.log("JS Loaded!!!!")
let number = document.querySelector("#numberInput");
number.addEventListener("input",checkCondition);
function checkCondition(){
    if(number.value <= -10 || number.value >= 10)
    {
        alert("The number should be between -10 and 10");
        if(number.value <= -10 ){
            (number.value= -10);
        }
        if(number.value >= 10){
            (number.value = 10);
        }
    }
}

const fruit=
{
    name: "Kiwi",
    color:"Green",
    taste:"Sour & sweet"
};

document.querySelector("#fruitName").innerHTML=`Name: ${fruit.name}`;
document.querySelector("#fruitColor").innerHTML=`Name: ${fruit.color}`;
document.querySelector("#fruitTaste").innerHTML=`Name: ${fruit.taste}`;