// let x = 28;
// let y = 13;
// // false to kc ndi sila mag kapareho

// let d = "Tey";
// let b = "Tey";
// // True to kc same sila

// let result = d == b;

// alert(result);

// For comparison operators expected result are in boolean ( its not limited to number )

// let x = 28;
// let y = 13;
// // If the value is not equal then the condition is True

// let result = x != y;

// alert(result);



// let x = 28;
// let y = 13;
// // Left operand is less than the value of right operand 
// let result = x < y;

// alert(result);



// let x = 28;
// let y = 13;
// // True ( left is greater than or equal to the value of right)
// let result = x > y;

// alert(result);

// let x = 28;
// let y = 13;
// True left is greater than or equal to the value of right 
// let result = x >= y;

// alert(result);

// let x = 28;
// let y = 13;
// // left is less than or equal to the right 
// let result = x <= y;

// alert(result);


// let x = 28;
// let y = 13;
// // Exactly equals, including type ( TRUE )
// let result = x === y;

// alert(result);

// let x = 28;
// let y = 13;
// // Not equal in either value or type
// let result = x != y;

// alert(result);



// let x = true;
// let y = true;

// // AND - &&
// // OR - ||

// let result = x && y;

// alert(result);

// let x = true;
// let y = true;

// // AND - &&
// // OR - ||

// let result = x || y;

// alert(result);

// LOGICAL OPERATORS

// COMBINATION OF LOGICAL OPERATORS AND COMPARISON OPERATORS

// let x = (23 + 5 /2) < (20 + 5);
// let y = 5 > 4;



// let result = x || y;

// alert(result);

// let age = 10;

// if(age > 18){
//     alert("You can now vote!");
// }
// else{
//     alert("You are still a minor!");
// }

// const ageCalculation = () => {
//     let age = Number(document.querySelector("#ageInput").value);

//     if(age >= 18){
//         alert("You can now vote!");
//     }
//     else if (age > 12){
//         alert("You are still in Highschool!");
//     }
//     else if(age >= 0 && age <=12){
//         alert("You are still a minor!");
//     }
//     else{
//         alert("Not a valid age!");
//     }
// }


// 
// age is greater than or equal to 18 = "You can now vote!"

// age is greater than 12 and less than 18 = "You are still in HS"

// age is less than 12 = "You are still a minor"

// 


// let fruit = "saging";

// switch(fruit){
//     case "apple":
//     alert("Wow you have chosen apple!");
//     break;
//     case "banana":
//         alert("Wow you have chosen banana!");
//         break;
//         default:
//             alert("None of the above!")
// }


// Simple Switch Sample

// let age = 18

// switch(true){
//     case (age >= 18):
//         alert("You can now vote!");
//     break;
//     case (age > 12):
//         alert("You are still in Highschool!");
//     break;
//     case (age >= 0 && age <= 12):
//         alert("You are still a minor!");
//     break;
//     default:
//         alert("Not a valid age!");
// }

// Simple Switch Sample

// Phases of life 

// 0 - 7 =  Early Childhood
// 8 - 12 = Childhood
// 13 - 16 = Early Teenager
// 17 - 19 = Late Teenager
// 20 - 35 = Early Adolescene 
// 36 - 60 = Adolescene
// 61 - above = Elderly

const phasesCalculation = () => {
    let age = Number(document.querySelector("#phasesInput").value);

    if(age >= 0 && age <=7){
        alert("Early Childhood");
    }
    else if(age >= 8 && age <= 12){
        alert("Childhood")
    }
    else if(age >= 13 && age <= 16){
        alert("Early Teenager")
    }
    else if(age >= 17 && age <= 19){
        alert("Late Teenager")
    }
    else if(age >= 20 && age <= 35){
        alert("Early Adolescene")
    }
    else if(age >= 36 && age <= 60){
        alert("Adolescene")
    }
    else{
        alert("Elderly")
    }
}
