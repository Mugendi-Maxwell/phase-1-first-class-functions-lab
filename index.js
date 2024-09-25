// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};


const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
console.log(returnFirstTwoDrivers(drivers));

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(2)
}
const selectingDrivers = ([returnFirstTwoDrivers,returnLastTwoDrivers])
const createFareMultiplier = (multiplier) =>{
    return (number) =>{
        return number*multiplier;
    }
}
const quadruple = createFareMultiplier(4)
const fareDoubler = createFareMultiplier(2)
const  fareTripler = createFareMultiplier(3)
const selectDifferentDrivers = function (param1,param2) {

       if (param2 === returnFirstTwoDrivers) {
           return drivers.slice(0,2)        
       } else if(param2 === returnLastTwoDrivers){ return drivers.slice(2)
         
       }
}



