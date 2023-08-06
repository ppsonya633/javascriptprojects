
//factory functions.
/* 
function createRectangles(hight){
   return{ 
        hight,
        
        area(){
            console.log('area is calculating.')
        }
       
     };
    }
    const ractangleThree=createRectangles(2);
    console.log(ractangleThree);
    ractangleThree.area();
    
    const rectangleTwo=createRectangles(30);
    console.log(rectangleTwo);
    rectangleTwo.area();
    */
    // Constructor Function.
    /*
    function Circle(radius){
        this.radius=radius;
        this.draw=function(){
            console.log('draw the circle');
        }
    }
    const circle1=new Circle(66);

    console.log(circle1);
    circle1.draw();
     */
    // Dynamic property of a objects.

    const person={
        id:66,
        age:20,
        address:'padoli',
        nav:'pratik patil',
        edjucation(){
            console.log('b.tech ty entc');
        }
    };
    person.name='pratik';
    console.log(person);
    /*
    person.status='unmarid';
    person.profession='sde3';
    person.dream=function(){}
    delete person.id;
    delete person.edjucation;
    delete person.dream;
    delete person.profession;
    delete person.status;
    delete person.address;
    delete person.age;
    console.log(person);
     */
    // value vs refrence.
    let a=10;
    let b=a;
    a=20;
    console.log(a+'  '+b);

    let x={value:40};
    let y=x;
    x.value=50;
    console.log(x.value+'   '+y.value);


    //ex 3
    let collect=10;
    function increase(collect){
        return ++collect;
    }
    console.log(increase(collect));
    console.log(collect);
    console.log(increase(30));
 


    let obj={prize:50};
    function increment(obj){
        obj.prize++;
    }
    increment(obj);
    console.log(obj)

    console.log('persons deteils');
    // for in lopp.
    /*
    for (let key in person)
        console.log(key);

        const cylinder={
            radius:10,
            area(){
                console.log('area is 0');
            }
        }
        for(let key in cylinder)
        console.log(key,cylinder[key]);

        for(let key of Object.keys(cylinder))
        console.log(key);
        for(let entry of Object.entries(cylinder))
        console.log(entry);
    */
   console.log("cloonong mehods of an objects");
   const rahul={
    age:18,
    village:'pandharpur',
    branch:'electrical'
   }
   const rohit=Object.assign({},rahul);
   console.group(rohit);

   //2nd methods.
   const pratik={...rahul};
   console.log(pratik);
 
   // Templete Literals...
   const temp=`hello i am ${100+200} pratik
   i am from padoli dist ${'ok accepted.'}
   dharashiv.`;


// Exercise 1.
 /*
const showaddress=function(address1){
    for(let key in address1)
    console.log(key,address1[key]);
    //return address1;
}
showaddress(address1);*/
/*
function address1(street,city,zipcode){
    this.street=street,
    this.city=city,
    this.zipcode=zipcode
}
let con=new address1('london','new york',413501);
console.log(con);
*/
/*function creataddress(street,city,zipcode){
    return{
        street,
        city,
        zipcode
    }}
const address2=creataddress('london','new york',413501);
console.log(address2);*/
// Check the equality of a objects

function address1(street,city,zipcode){
    this.street=street,
    this.city=city,
    this.zipcode=zipcode
}
let addres2=new address1('a','b','c');
let addres3=new address1('a','b','c');
//let addres4=new address1('a','b','c');
let addres4=addres2;

function isSame(addres2,addres3)
{
   return addres2.street===addres3.street&&
   addres2.city===addres3.city&&addres2.zipcode===addres3.zipcode;
}
function isEqual(addres2,addres3)
{
    return addres2===addres3;
}

console.log(isSame(addres2,addres3));
console.log(isEqual(addres2,addres3));
console.log(isEqual(addres4,addres2));

let blog={
    title:'a',
    body:'b',
    view:100,
    Comments:[
        {title:'a',body:'b'},
        {title:'c',body:'d'}
    ],
    iscorrect:true
}
console.log(blog);



    