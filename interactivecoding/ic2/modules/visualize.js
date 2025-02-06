window.global = 10;

const visualize = {};

export const date = () => {
    return new Date().toString();
}
const a = "hello";
export const num = 10;

// this would be the simple way to declare a class
// export class Chart {

// }

// the class keyword declares a class
visualize.Chart = class {
    // the constructor runs first when making new Chart()
    // and receives parameters - here we also have default values

    // here is a way to declare a private property (variable)
    #multiplier
    

    constructor(d=[1,2,3], divider=1, multiplier=1) {
        console.log(d);

        // we need to access the private property on this
        this.#multiplier = multiplier;

        this.data = d;  //  we just made a property
        // here is a method stored on this inside the constructor
        // which gives access to local variables
        this.divide = ()=>{
            return this.add() / divider;
        }
    }

    multiply() {
        // we need to access the private property on this
        return this.add() * this.#multiplier;
    }

    // here is a method!  woot.
    add() {
        console.log("adding");
        
        let total = 0;
        for (let i=0; i<this.data.length; i++) {
            total += this.data[i];
        }
        return total;
    }

}

visualize.PieChart = class extends visualize.Chart {
    constructor(d=[22,33]) {
        // must call super() to activate the base class
        super(d); // calls the super class constructor and passes params

        console.log("Hi from PieChart");

        this._max = 1000;
        
    }

    rotate() {
        console.log("rotating! " + this.data);        
    }

    get max() {
        return this._max;
    }

    set max(value) {        
        this._max = Math.min(value, 1000);
    }

    // override the base class add() method
    add() {
        console.log("adding in pie chart");
        console.log(super.add());
        return super.add()*20
    }

    // this belongs to class, not the object
    static company = "Sheridan";
    static makeOrigin() {
        console.log("returning a little cross-hair origin widget");        
    }

    
}

window.Chart = visualize.Chart;
window.PieChart = visualize.PieChart;
export default visualize;
