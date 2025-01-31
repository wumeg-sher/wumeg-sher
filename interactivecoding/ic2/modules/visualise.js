window.global = 10; 

const visualise = {};

export const date = ()=>{
    return new Date();
};

export const ten = 10;

// let multiplier;
// this is not actually allowed lol 




// class Chart{}, if you were not exporting Chart 
visualise.Chart = class {
    //constructor runs first, takes parameters, otherwise runs what is in there as default
    //constructor is a function, does not need the key word because things we put in the class is a function

    //declare private property
    #multiplier; 

    constructor (d =[1,2,3], divider=1, multiplier=1){ 
        console.log(d);
        // multiplier=m; from when m=1 after divider
        this.data = d; //anything u store on this is a property
        this.#multiplier = multiplier;

        // //method stored on this inside constructor, so can access local variables 
        // this.findMin = ()=>{
        //     return Math.min(...d);
        // }

        this.divide = ()=>{
            return this.add()/divider;
        }

        // this.multiply = ()=>{
        //     return this.add()*multiplier;
        // }
    }

    //does not have access to multiplier variable, do not want to use This 
    multiply(){
        return this.add()*this.#multiplier;
    }

    //a method
    add() {
        console.log("adding")
        let total = 0;
        for (let i=0; i<this.data.length; i++){
            total += this.data[i]
        }
        return total;
    };
}
//problem to make variables available across classes
//store a function on an object, build function inside the constructor 



window.Chart = visualise.Chart;
export default visualise;

