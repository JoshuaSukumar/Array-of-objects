let studentRecords = [ 
   {name: 'John', id: 123, marks : 98 },
   {name: 'Baba', id: 101, marks : 23 },
   {name: 'yaga', id: 200, marks : 45 },
   {name: 'Wick', id: 115, marks : 75 } ]

// answer for question 1  
let array2 = [];
for(let i=0; i<studentRecords.length; i++) {
   array2.push(studentRecords[i].name.toUpperCase());
}
console.log(array2);



// answer for question 2
let array3 = [];
for(let i=0; i<studentRecords.length; i++) {
   if(studentRecords[i].marks>50) {
      array3.push(studentRecords[i]);
   }
}
console.log(array3);



// answer for question 3
let array4 = [];
for(let i=0; i<studentRecords.length; i++) {
  if(studentRecords[i].marks>50 && studentRecords[i].id>120) {
    array4.push(studentRecords[i]);
  }
}
console.log(array4);



// answer for question 4
let sum = 0;
for(let i=0; i<studentRecords.length; i++) {
   sum += studentRecords[i].marks;
}
console.log(sum);



// answer for question 5
let array5 = [];
for(let i=0; i<studentRecords.length; i++) {
   if(studentRecords[i].marks>50) {
      array5.push(studentRecords[i].name);
   }
}
console.log(array5);



// answer for question 6
let sum2 = 0;
for(let i=0; i<studentRecords.length; i++) {
   if(studentRecords[i].id>120) {
      sum2 += studentRecords[i].marks;
   }
}
console.log(sum2);



// answer for question 7
let sum3 = 0;
for(let i=0; i<studentRecords.length; i++) {
  if(studentRecords[i].marks<50) {
    studentRecords[i].marks += 15;
  }
  if(studentRecords[i].marks>50) {
    sum3 += studentRecords[i].marks;
  }
}
console.log(sum3);



// answer for question 8
let classStudent = [{name: 'Akhil', class: 10, roll: 3}, 
{name: 'David', class: 10, roll: 5}, 
{name: 'Deer', class: 10, roll: 7}, 
{name: 'Krishna', class: 10, roll: 8}, 
{name: 'Karen', class: 10, roll: 12},  
{name: "Arjun", class: 10, roll: 1}]
console.log(classStudent);