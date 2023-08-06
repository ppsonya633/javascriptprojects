// Es6 classes
/*
class circle{
    constructor(radius)
    {
        this.radius=radius;
        this.move=function(){console.log('move');}
    }
    draw(){
        console.log('draw');
    }
}
const c=new circle(1);
*/


//Function Decleration.
//Hosting.
/*
sayhello(); 
function sayhello(){
    console.log('Hello');
}
/Function Expression
/ sayGoodbye();  Hosting.
const sayGoodbye=function(){
    console.log('goodbye');
};

/Class decleration
/ Hosting is not applicable for classes. 
class saygoodbye{
    

}
/class expression
const square=class{

}*/
// static methods.
/*
class circle{
    constructor(radius)
    {
        this.radius=radius;
    }
    // instance Method.
    draw(){

    }
    //static method.
    static parse(str){
        const radius=JSON.parse(str).radius;
        return new circle(radius);
    }
}
const Circle=circle.parse('{"radius":6}');
console.log(Circle);
console.log('pratik patil');
*/
/*
   'use strict';
const circle=function(){
    this.draw=function(){console.log(this);}
};
const c=new circle();
c.draw();
const draw=c.draw;
console.log(draw);
draw();
*/
//private properties in Es6 classes.
/*
_radius=Symbol(); //using this we can make it private.
_draw=Symbol();
class circle{
    constructor(radius)
    {
        //this.radius=radius;
        //this[radius]=radius;
        this[_radius]=radius;
    }
    [_draw](){
        console.log('draw');
    }

}
const c=new circle(1);
const key=Object.getOwnPropertySymbols(c)[0];
console.log(c[key]);
console.log(c._draw);
*/
/*
const _radius=new WeakMap();
class circle{
    constructor(radius){
        _radius.set(this,radius);

    }
    get radius(){
        return _radius.get(this);
    }
    set radius(value)
    {
        if(value<=0)
        throw new Error('invalid value of radius');
        _radius.set(this,value);
    }
}
const c=new circle(1);
*/
// Es6 classes Inheritance.
class shape{
    constructor(color){
        this.color=color;
    }
    move(){
        console.log('move');
    }

}
class circle extends shape{
    constructor(color,radius){
        super(color);
        this.radius=radius;

    }
    draw(){
        console.log('draw');
    }
}
const c=new circle('yellow',10);
