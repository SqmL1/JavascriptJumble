function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  for (let property in Dog){
    if (Dog.hasOwnproperty(property)){
        ownProps.push(property);
    } else {
      prototypeProps.push(property);
    }
  }

/*
1. A function initilizing the object Dog with the parameters name 
2. 
*/