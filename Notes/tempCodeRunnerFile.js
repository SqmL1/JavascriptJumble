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