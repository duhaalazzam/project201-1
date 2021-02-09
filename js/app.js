'use strict';
let userName=prompt('What is your name?');
alert(`Hello ${userName} in our site, I will ask you some questions about me,try to guss them :)`)
let corNum=0;
let movie=prompt('Do you think i love movies?');
movie=movie.toLowerCase();
if (movie==='yes'|| movie==='y')
{
  console.log('correct q1');
  alert('Correct ');
  corNum++;
}else if(movie==='no'||movie==='n')
{
  console.log('Incorrect q1');
  alert('Incorrect ');
}else{
  alert('Enter just yes/y or no/n');
  console.log('Enter just yes/y or no/n q1');
}
let cartoon=prompt('Do you think i watch cartoon?');
cartoon=cartoon.toLowerCase();
if (cartoon==='yes'|| cartoon==='y')
{
  console.log('correct q2');
  alert('Correct');
  corNum++;
}else if(cartoon==='no'||cartoon==='n')
{
  console.log('Incorrect q2');
  alert('Incorrect');
}else{
  alert('Enter just yes/y or no/n');
  console.log('Enter just yes/y or no/n q2');
}
let jordan=prompt('Do you think i am jordanian?');
jordan=jordan.toLowerCase();
if (jordan==='yes'|| jordan==='y')
{
  console.log('correct q3');
  alert('Correct');
  corNum++;
}else if(jordan==='no'||jordan==='n')
{
  console.log('Incorrect q3');
  alert('Incorrect');
}else{
  alert('Enter just yes/y or no/n');
  console.log('Enter just yes/y or no/n q3');
}
let web=prompt('Do you think i learn web development?');
web=web.toLowerCase();
if (web==='yes'|| web==='y')
{
  console.log('correct q4');
  alert('Correct');
  corNum++;
}else if(web==='no'||web==='n')
{
  console.log('Incorrect q4');
  alert('Incorrect');
}else{
  alert('Enter just yes/y or no/n');
  console.log('Enter just yes/y or no/n q4');
}
let live=prompt('Do you think i live in jordan?');
live=live.toLowerCase();
if (live==='yes'|| live==='y')
{
  console.log('correct q5');
  alert('Correct');
  corNum++;
}else if(live==='no'||live==='n')
{
  console.log('Incorrect q5');
  alert('Incorrect');
}else{
  alert('Enter just yes/y or no/n');
  console.log('Enter just yes/y or no/n q5');
}
let age;
let correctFlag=0;
for(let i=0;i<4;i++){
  age=prompt('How old am i do you think?');
  age=parseInt(age);
  if(age>27 && age<=100)
  {
    alert('too high');
    console.log('too high');
  }else if(age<27 && age>=4)
  {
    alert('too low');
    console.log('too low');
  }else if(age===27)
  {
    alert('correct answer');
    console.log('correct q6');
    correctFlag=1;
    corNum++;
    break;
  }else{
    alert('Enter just a number between 4 and 100');
    console.log('Enter just a number between 4 and 100 for q6 age qusetion');
  }
}
if (correctFlag===0)
{
  alert('My age is 27 old');
  console.log('incorrect q6');
}
let lang;
let corflag=0;
let arr=['yellow','green','red','pink'];
for(let i=0;i<6;i++)
{
  lang=prompt('what is my favourite color?');
  lang=lang.toLowerCase();
  for(let j=0;j<arr.length;j++){
    if(lang===arr[j]){
      alert(`Correct answer,My favourite colors are ${arr}`);
      console.log('correct q7');
      corNum++;
      corflag=1;
      break;
    }
  }
  if(corflag===1)
  {
    break;
  }
  console.log(`try number ${i+1}`);
  if(i===5)
  {
    alert(`Incorrect answer,My favourite colors are ${arr}`);
    console.log('incorrect q7');
  }
}
console.log(`you have answered ${corNum} correct answres out of 7`);
alert(`you have answered ${corNum} correct answres out of 7`);
alert(`Thank you ${userName} for visiting our site and take the gussing game :)`);
