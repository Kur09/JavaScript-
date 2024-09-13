//console.log(this);

// In give below this keyword is use for refer current object
const obj = {
    name: 'John',
    sayName: function() {
      console.log(this);
    }
  };
  
  obj.sayName();


//refers current funciton 
  function sayName() {
    //console.log(this);
  }
  
  sayName();