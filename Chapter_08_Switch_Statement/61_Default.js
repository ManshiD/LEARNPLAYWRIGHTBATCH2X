let day = 10;
// 1- monday, 2 - tuesday
switch (day) {
    case 1:
        console.log("Monday - Sprint Planning");
        break;
    case 2:
        console.log("Tuesday - Development"); 
        break;
    case 3:
        console.log("Wednesday - Code Review");   
        break;
    case 4:
        console.log("Thursday - Testing");
        break;
    case 5:
        console.log("Friday - Deployment & Retrospective");
        break;  
    case 6:
        console.log("Saturday - Rest Day");
        break;
    case 7:
        console.log("Sunday - Rest Day");  
        break;
    default:
        console.log("Invalid day value");
    }