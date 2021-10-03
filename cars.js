class Vehicle{

    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    Information() {                                                                  // `` is the button to the left of the number 1 , it's different to ''
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`); // ${this.make}  will print out the value that is passed through using a method call 
                                                                                     // instead of printing it at the end
    }
}

let myVehicle = new Vehicle('VW', 'Golf', 2008); // created an instance of the vehicle class, meaning we have access to the constructor and it's parameters/variables
let info = myVehicle.Information(); // creating a variable info and setting it = my instance variable myVehicle and then calling the Information method which prints the info

// Inheritance
class Cars extends Vehicle{
    constructor(make, model, year, doors) {     // now has 4 arguments, overrided the constructor for this new class, it only affects this class' new version of the constructor 
    super(make, model, year); // this is invoking the constructor from the parent class using super() , we need to do this when overriding a constructor with the old arguments your still going to use
    this.doors = doors; // this.doors is the local instance of doors
    }

    Information() {
        super.Information(); // Invoking the Information method from the parent class above, could call it something different but can keep them the same
        console.log(`Doors: ${this.doors}`); // this needs to be added because after we invoked the Information() method from the parent above, it doesnt print doors, this version will
        
    }

}

let myCar = new Cars('VW', 'Golf', 2011, 5); // create an object called myCar which is an instance of the new Class Cars, it now takes 4 arguments
myCar.Information(); // no need to make a new variable 