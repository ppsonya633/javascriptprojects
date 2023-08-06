/*
const number=[3,4];
number.push(4,5,6,8,9,10);


number.splice(1,0,'p','r','a','t','i','k');
console.log(number);
*/
/*
 const value=[
    {id:1,course:'a'},
    {id:2,course:'b'}
 ]
 const real=value.find(value=>value.course==='a'
 )
 console.log(real);
 */
/*let filtera=[1,2,3,4,5,6,7,8,9,10];
const b=filtera.filter((number)=>{return number>=5 });
console.log(b);*/

/*  function circle(radius)
{
   this.radius=radius;
   let defaultlocation={x:1,y:1};
   this.getdefaultLocation=function(){
      return defaultlocation;
   }
   let computelocation=function(){

   }
   this.draw=function(){
      console.log('draw a circle');
   }
   Object.defineProperty(this,'defaultlocation',{
      get:function(){
         return defaultlocation;
      },
     /* set:function(value){
         if(!value.x||!value.y)
         throw new Error('Invalid Location');
         defaultlocation=value;
      }*/
   /*})
}
const Circle=new circle(10);
Circle.draw();
//Circle.getdefaultLocation;
Circle.defaultlocation=1;
  */

// Stop Watch Exercise
function stopWeatch(){
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