// Task 1
const allStudent = [
  { name: "Rahim", present: true },
  { name: "Karim", present: false },
  { name: "Mim", present: true },
  { name: "Sadia", present: true }
];


function countPresent(students) {
    let totalPresent = 0
    let totalApsent = 0
  for(student of students){
if(student.present==true){
    totalPresent++
}  else{
    totalApsent++
  }
  }

  console.log("Total Present",totalPresent)
  console.log("Total Absent",totalApsent)
}
countPresent(allStudent)


// Task 2
const iceCreams = [
  { flavor: "Chocolate", price: 80 },
  { flavor: "Vanilla", price: 60 },
  { flavor: "Mango", price: 70 }
];

function calculateTotal(items) {
    let totalPrice = 0
    for(item of items){
        totalPrice=totalPrice+item.price
    }
       console.log("Total Price:",totalPrice,"tk");
    if(totalPrice>200){
        let discount = totalPrice*0.1
        let discountPrice =totalPrice-discount
        console.log("Discount:",discount,"tk");
        console.log("Total Price With Discount :",discountPrice,"tk");

    }
 else{
       console.log("Total Price:",totalPrice);
 }

}
calculateTotal(iceCreams)

// Task 3
const players = [
  { name: "Shakib", runs: 45 },
  { name: "Tamim", runs: 70 },
  { name: "Mushfiq", runs: 35 }
];

function getTotalRuns(players) {
  let totalRun = 0
  for(player of players){
    totalRun=totalRun+player.runs
  }
  console.log("Total Runs:",totalRun);
}

function getTopScorer(players) {
  let topRunPlayer = ""
  let topScore = 0



  for(let player of players){
    if(topScore<player.runs){
        topRunPlayer=player.name
        topScore=player.runs
    }
  }
  console.log("Top Scorer player is",topRunPlayer,"and Top Score:",topScore);
}

function fiftyPlurScorer(players){
for(let player of players){
    if(player.runs>=50){
        console.log("Fifty Plus Score Player:",player.name);
    }
}
}


getTotalRuns(players)
getTopScorer(players)
fiftyPlurScorer(players)

// Task 4

const pocketMoney = 500;

const expenses = [
  { item: "Chocolate", amount: 50 },
  { item: "Notebook", amount: 120 },
  { item: "Pen", amount: 30 }
];

function getRemainingMoney(money, expenses) {
let totalExpenses = 0
for(expense of expenses){
    totalExpenses=totalExpenses+expense.amount
}
let moneyDue = money-totalExpenses
console.log("Money Due:",moneyDue,"tk");
console.log("Total Expenses:",totalExpenses,"tk");

}

getRemainingMoney(pocketMoney,expenses)

// Task 5

const students = [
  { name: "Rafi", marks: 85 },
  { name: "Sami", marks: 32 },
  { name: "Nila", marks: 67 }
];

function checkResult(students) {

    for (const student of students) {
        let status
        let grade

  if(student.marks>40){
status="Passed"
if(student.marks>=80){
grade="A+"

}
else if(student.marks>=60){
grade="A"

}
else if(student.marks>=40){
grade="B"

}
else{
     grade="F"
}

  }
  else{
    status="failed"
    grade="F"
  }

  console.log("Name:",student.name,"Marks:",student.marks,"Result:",status ,"Grade:",grade);

}

}

checkResult(students)

// Task 6

const books = [
  { title: "Harry Potter", available: true },
  { title: "Science Fun", available: false },
  { title: "Math Magic", available: true },
];

function findBook(bookName) {
  for (let book of books) {
    if (book.title == bookName) {
     if(book.available == true){
         console.log(book.title, " is Available");
     }
     else{
         console.log(book.title, " is not Available");
     }
     
    }
  }
}
function availableBooks (allBooks){
for(let book of allBooks){
if(book.available === true){
    console.log("Available Book :", book.title,);
}
}
}



findBook("Math Magic");

availableBooks(books)


// Task 7

const budget = 1000;

const gifts = [
  { name: "Teddy Bear", price: 600 },
  { name: "Watch", price: 1200 },
  { name: "Story Book", price: 350 },
  { name: "Toy Car", price: 450 }
];

function findAffordableGifts(gifts, budget) {
for(let gift of gifts){
if(gift.price <= budget){
    console.log("Affordable Gift:",gift.name );
}
}
}
function affordableGift (gifts, budget){
let bigGift = ""
let bigPrice = 0
for(let gift of gifts){
if(gift.price <= budget){
   
    if(gift.price>bigPrice){
        bigGift=gift.name;
        bigPrice=gift.price
    }
}
}
console.log("Most expensive affordable gift is", bigGift ,"and Price:",bigPrice,"tk");


}



findAffordableGifts(gifts,budget)
affordableGift(gifts,budget)

// Task 8


const cart = [
  { name: "Pen", price: 10, quantity: 3 },
  { name: "Notebook", price: 50, quantity: 2 },
  { name: "Bag", price: 500, quantity: 1 }
];

function calculateCartTotal(cart) {
    let totalPrice = 0
  for(item of cart){
let sum = item.price * item.quantity
totalPrice = totalPrice+sum
  }

  if(totalPrice>500){
let discountPrice = totalPrice-  50
console.log("Total Price :",totalPrice,"tk");
console.log("Total Price With Diacount:",discountPrice,"tk");
  }
  else{
    console.log("Total Price:",totalPrice,"tk");
  }
}

calculateCartTotal(cart)



