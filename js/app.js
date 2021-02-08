'use strict';
let userName=prompt('What is your name?');
alert(`Hello ${userName} in our site, I will ask you some questions about me,try to guss them :)`)
let movie=prompt('Do you think i love movies?');
movie=movie.toLowerCase();
if (movie==='yes'|| movie==='y')
{
  console.log('correct');
  alert('Correct');
}else if(movie==='no'||movie==='n')
{
  console.log('Incorrect');
  alert('Incorrect');
}
let cartoon=prompt('Do you think i watch cartoon?');
cartoon=cartoon.toLowerCase();
if (cartoon==='yes'|| cartoon==='y')
{
  console.log('correct');
  alert('Correct');
}else if(cartoon==='no'||cartoon==='n')
{
  console.log('Incorrect');
  alert('Incorrect');
}
let jordan=prompt('Do you think i am jordanian?');
jordan=jordan.toLowerCase();
if (jordan==='yes'|| jordan==='y')
{
  console.log('correct');
  alert('Correct');
}else if(jordan==='no'||jordan==='n')
{
  console.log('Incorrect');
  alert('Incorrect');
}
let web=prompt('Do you think i learn web development?');
web=web.toLowerCase();
if (web==='yes'|| web==='y')
{
  console.log('correct');
  alert('Correct');
}else if(web==='no'||web==='n')
{
  console.log('Incorrect');
  alert('Incorrect');
}
let live=prompt('Do you think i live in jordan?');
live=live.toLowerCase();
if (live==='yes'|| live==='y')
{
  console.log('correct');
  alert('Correct');
}else if(live==='no'||live==='n')
{
  console.log('Incorrect');
  alert('Incorrect');
}
alert(`Thank you ${userName} for visiting our site and take the gussing game :)`);
