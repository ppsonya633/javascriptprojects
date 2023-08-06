// Prototype.
/*  Prototype Description.
let person={name:'pratik'};
Object.defineProperty(person,'name',{
    writable:false,
    enumerable:false,
    configurable:false
});
person.name='patil';
console.log(person);
console.log(Object.keys(person));
delete person.name;
console.log(person);
*/
// Constructor Prototypes
/*
function circle(radius){
    this.radius=radius;
}
const c1=new circle(1);
*/
//methods using prototypes.
/*
function circle(radius){
    // Instance
this.radius=radius;{
    
}
}*/
//Prototypes.
/*
circle.prototype.draw=function(){
    console.log('draw1');
}
circle.prototype.toString=function(){
    console.log('circle with radius'+this.radius);
}
const c1=new circle(1);
const c2=new circle(1);
*/
// ITERATING PROPERTIES.
/*
function Circle(radius){
    this.radius=radius;
    this.move=function(){
        console.log('move to goal');
    }

}
Circle.prototype.draw=function(){
    console.log('draw');
}
const c1=new Circle(10);
// Returns Instance member
console.log(Object.keys(c1));
//For each loop. 
// Instance + Prototype.
for(let key in c1)
console.log(key);
*/
/*function stopWeatch(){
   let startTime,endTime,running,duration=0;
   this.start=function(){
      if(running)
      throw new Error('stopwatch is allready started');
      running=true;
      startTime=new Date();
   }
   this.stop=function(){
      if(!running)
      throw new Error('stopweatch is stopped.');
      running=false;
   endTime=new Date();

   const second=(endTime.getTime()-startTime.getTime())/1000;
   duration+=second;
   }
   this.reset=function(){
      startTime=null;
      endTime=null;
      running=null;
      duration=0;
   }
   Object.defineProperty(this,'duration',{get:function(){
      return duration;
   }})


}
const sw=new stopWeatch();
*/
function stopwatch(){
    let startTime,endTime,running,duration=0;
    Object.defineProperty(this,'duration',{get:function(){
        return duration;
     },set:function(value){duration=value;}})
     Object.defineProperty(this,'startTime',{get:function(){
        return startTime;
     }})
     Object.defineProperty(this,'endTime',{get:function(){
        return endTime;
     }})
     Object.defineProperty(this,'running',{get:function(){
        return running;
     }})
}
stopwatch.prototype.start=function(){
    if(this.running)
    throw new Error('stopwatch is allready started');
    this.running=true;
    this.startTime=new Date();
}
stopwatch.prototype.stop=function(){
    if(!this.running)
    throw new Error('Stopwatch is stopped');
    this.running=false;
    this.endTime=new Date();
    const second=(endTime.getTime()-startTime.getTime())/1000;
   this.duration+=second;

}
stopwatch.prototype.reset=function(running){
    this.startTime=null;
      this.endTime=null;
      this.running=null;
      this.duration=0;

}
const sw=new stopwatch();
console.log(Object.keys(sw));
 for(let key in sw)
 console.log(key);

