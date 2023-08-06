// array methods
/*
const demo=['apple','ball','cat','dog'];
const name1=demo.find((namea)=>namea[0]=='c');
console.log(name1);
demo.push('pratik');
const name2=demo.find((namea2)=>namea2[0]=='p');
const demo3=demo.find((n)=>n.startsWith('p'));
console.log(demo3);
if(demo.includes("peacock"))
{
    console.log("cat is available")
}
else
console.log("sorry book is not found");
// array Reduce Method.
const tfees=[56460,1500,12000];
const totalfess=tfees.reduce((initial,final)=>initial+final,40);
console.log(totalfess);*/

//Asynchronous javascript 1) Callback functions.
/*
const square=(number)=>{
    return number*number;
}
const ans=square(5);
console.log(ans);

const add=(n1)=>{
return n1+n1;
}

const sub=(p)=>{
    return p-1;
}
 const mul=(m)=>{
    return m*m;
 }
 const div=(d)=>{
    return d/2;
 }
 const value=div(30);
 console.log(value);

 const total=(a,b,c,d)=>a+b+c+d;
 const cost=total(10,10,10,10);
 console.log(cost);

 const featchuser=(username,callback)=>{
    setTimeout(() => {console.log('now we have a user');
    callback({username});
        
    }, 2000);
 }
 const user=featchuser('pratik',(user)=>{
    console.log('your name is:${user.username}');
 })*/
 // Callback demo.
 /*
 const callback=(n)=>{
   return n**2;
 }
 const cube=(callback,n)=>{
   return callback(n)**n;
 }
 console.log(cube(callback,2));
*/
let sum=function(a,b){
   return a+b;

}
console.log(sum(5,0));

let welcome=function(personName){

   console.log('welcome in the world of js'+personName);
   return personName;   
}
console.log(welcome('pratik'));

let rectangle={
   hight:20,
   dimensions: {
      length:10,
      bridth:20
   },
   isEqual:true,
   area:function(){
      console.log('area is calculated');
   }
}
rectangle.area();
