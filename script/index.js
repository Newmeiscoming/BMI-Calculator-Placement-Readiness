let form = document.getElementById("form");
let result = document.getElementById("result-display");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let clear = document.getElementById("clear");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let age = document.getElementById("age").value;
    if(age<2||age>120){
    
        result.innerHTML = "Please provide age between 2 to 120"
        result.style.color = "red";
        return;
    }
    if(height.value<1){
        alert("Please enter valid height");
        return;
    }
    if(weight.value<0){
        alert("Please enter valid weight");
        return;
    }
    let BMI = (weight.value/((height.value/100)**2)).toFixed(1);
    let status = "";
    if(BMI<16){
        status = "Severe thinness";
    }
    else if(BMI>=16&&BMI<17){
        status = "Moderate Thinness";
    }
    else if(BMI>=17&&BMI<18.5){
        status = "Mid Thinness";
    }
    else if(BMI>=18.5&&BMI<25){
        status = "Normal";
    }
    else if(BMI>=25){
        status = "Overweight";
    }

    result.innerHTML = `Your BMI is ${BMI} kg/m*m and your status is ${status}`;
    
    
})
clear.addEventListener("click",()=>{
    form.reset();
    result.innerHTML = ""
})