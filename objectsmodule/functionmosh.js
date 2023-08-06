/* What is mean by hosting.*/
/*hosting is the process of moving function declearation in the top of the code and it is done
automaticalley.*/

/*
function sum()
{
    let total=0;
    for(let value of arguments)
    total += value;
    return total;
    
}
console.log(sum(10,20,30,40,50));
*/
/*
const fname={
    firstname:'pratik',
    lastname:'patil',

    get fullname(){
        return`${fname.firstname} ${fname.lastname}`; 
    },


   set fullname(value){
    if(typeof value!== String)
    throw new Error('value is not a string');
    const parts=value.split(' ');
    this.firstname=parts[0];
    this.lastname=parts[1];

   }
    
}
try{
fname.fullname=null;
}
catch(e)
{
    alert(e);
}
console.log(fname.fullname);
*/
// This keyword
//1)as a function 
//Simple unction
/*
  const fun={
    name:'pratik',
    age:20,
    role(){
        console.log(this);
    }
  }
  fun.role();
*/
/*
function fun(){
   names='harshda';
   age=19;
   console.log(this);
}
fun();
*/
/*
const video={
    title:'a',
    tags:['a','b','c','d','e'],
    showtags(){
        this.tags.forEach(tag=>
        {
            console.log(this.title,tag);
        })
    }
}
video.showtags();
// Functions challange 1
console.log(sum([1,2,3,4]));
function sum(...items)
{
 if(items.length==1&& Array.isArray(items[0]))
 items=[...items[0]];
    return items.reduce((a,b)=>a+b);
}*/
//Exercise 2
const circle={
    radius:1.,
    get area(){
        return Math.PI*this.radius;
    }
}

console.log(circle.area);



