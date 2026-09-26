let userInput  =document.getElementById("date")
let result  =document.getElementById("result")

function calculateAge(){
    let birthDate= new Date(userInput.value);
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth();
    let y1 = birthDate.getFullYear();

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth();
    let y2 = today.getFullYear();

    let ageYears = y2 - y1;
    let ageMonths = m2 - m1;
    let ageDays = d2 - d1;

    if(ageDays < 0 ){
    ageMonths -= 1;
    let daysInPrevMonth = new Date(y2, m2, 0).getDate();
    ageDays += daysInPrevMonth;
    }

    if (ageMonths < 0) {
    ageYears -= 1;   
    ageMonths += 12;
    }
    result.innerHTML=`You are <span> ${ageYears} </span> years, <span> ${ageMonths} </span> months and <span> ${ageDays} </span> days old`

}