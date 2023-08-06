/*
function shape(color){
    this.color=color;


}

shape.prototype.duplicate=function(){
    console.log('duplicate');
}
function extend(child,parent)
{
    child.prototype=Object.create(parent.prototype);
    child.prototype.constructor=child;
}
function square(height,color){
    shape.call(this,color);
    this.height=height;


}
// square.prototype=Object.create(shape.prototype);
extend(square,shape);
square.prototype.draw=function(){
    console.log('draw a square');
}
function circle(radius,color)
{
    shape.call(this,color);
    this.radius=radius;
}
//Prototypical inheritance.
//circle.prototype.constructor=circle;
// new circle.prototype.constructor()=>new circle();
/*
circle.prototype=Object.create(shape.prototype);
shape.prototype.constructor=square;

circle.prototype.constructor=circle;
*/
/*
extend(circle,shape);
circle.prototype.draw=function(){
    console.log('draw a circle');
}
const s=new shape();
const c=new circle(1,'red');
const sq=new square(10,'yellow');
*/
// Method overrding
/*
function shape(){

}
shape.prototype.duplicate=function(){
    console.log('duplicate');
}
function extend(child,parent)
{
  child.prototype=Object.create(parent.prototype);
  child.prototype.constructor=child;
}
function circle(radius)
{
    this.radius=radius;
}
extend(circle,shape);
circle.prototype.duplicate=function(){
    shape.prototype.duplicate.call(this);
    console.log('circle duplicate');
}
function square(){

}
extend(square,shape);
square.prototype.duplicate=function(){
    console.log('square duplicate');
}
//const c1=new circle(1);
//const s=new shape();
const shapes=[
    new circle(),
    new square()
];
for(let shape of shapes)
{
    shape.duplicate();
}*/

// Mixing Composition concept.
/*
const caneat={
    eat:function(){
        this.hunger--;
        console.log('eating');
    }

}
const canwalk={
    walk:function(){
        console.log('walking');
    }
}
/*const person=
Object.assign({},caneat,canwalk);
console.log(person);*/
/*
function mixing(target,...sources)
{
    Object.assign(target,...sources);
}
function person(){

}
//Object.assign(person.prototype,caneat,canwalk);
mixing(person,caneat,canwalk);
const p=new person();
console.log(p);
const canswim={
    swim:function(){
        console.log('swiming');
    }
}
function goldfish(){

}
//Object.assign(goldfish.prototype,caneat,canswim);
mixing(goldfish,caneat,canswim);
const g=new goldfish();
console.log(g);
//const p=new person();
*/
// Exercise Prototypical Inheritance.
/*
function HtmlElement()
{
   this.click=function(){
    console.log('clicked');
   }
}
HtmlElement.prototype.focus=function(){
    console.log('stay focused');
}
function HtmlSelectElement(items=[])
{
    this.items=items;
    this.additem=function(item)
    {
        return this.items.push(item);
    }
    this.removeitem=function(item)
    {
        this.items.splice(this.items.indexOf(item),1);

    }

}
HtmlSelectElement.prototype=new HtmlElement();
HtmlSelectElement.prototype.constructor=HtmlSelectElement;
*/
// Exercise On Polymorphism.

