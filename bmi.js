// Creating a class, Class is a blueprint for creating objects
class BMI {

    // Adding a constructor, when the class gets invoked/used this constructor/method gets called first, it initialises our data
    constructor(height, weight) { // two arguments
        this.height = height;
        this.weight = weight;
    }

    // Method 
    calculateBMI() {

        let bmi = this.weight / (this.height ** 2); // create variable bmi that is = a calculation of two other variables
        return bmi;
    }

}

let MyBmi = new BMI(2, 90); // create a new instance of the class BMI , call it MyBmi
let calculatedBmi = MyBmi.calculateBMI(); // new variable called calculatedBmi that is = MyBmi which is an instance variable with two values already passed in,
                                          // and then calling the calculateBMI() method to actually calculate the bmi, it returns the value bmi
console.log(calculatedBmi); // print out the calculatedBmi, the value shown is the value 'return bmi' at the end of the calculateBMI() method