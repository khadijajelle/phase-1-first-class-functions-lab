// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    // Return a new array containing the first two drivers
    return drivers.slice(0, 2);
}

// Example usage:
const drivers = ['Alice', 'Bob', 'Charlie', 'David'];
const firstTwoDrivers = returnFirstTwoDrivers(drivers);
console.log(firstTwoDrivers); // This will log ['Alice', 'Bob'] to the console


function returnLastTwoDrivers(drivers) {
    // Return a new array containing the last two drivers
    return drivers.slice(-2);
}

// Example usage:
const lastTwoDrivers = returnLastTwoDrivers(drivers);
console.log(lastTwoDrivers); // This will log ['Charlie', 'David'] to the console

















// Define the returnFirstTwoDrivers function
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
}

// Define the returnLastTwoDrivers function
function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
}

// Define the selectingDrivers array with both functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Example usage:
const driver = ['Alice', 'Bob', 'Charlie', 'David'];

const firstTwoDriver = selectingDrivers[0](drivers); // Call the first function in selectingDrivers
console.log(firstTwoDrivers); // This will log ['Alice', 'Bob'] to the console

const lastTwoDriver = selectingDrivers[1](drivers); // Call the last function in selectingDrivers
console.log(lastTwoDrivers); // This will log ['Charlie', 'David'] to the console

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
}

// Define the fareDoubler function
function fareDoubler(fare) {
    return fare * 2; // Double the fare
}

// Example usage
let originalFare = 20;
let doubledFare = fareDoubler(originalFare);
console.log("Original Fare:", originalFare);
console.log("Doubled Fare:", doubledFare);

// Define the fareDoubler function
function fareTripler(fare) {
    return fare * 3; // Double the fare
}

// Example usage
let originalFar = 20;
let doubledFar = fareTripler(originalFar);
console.log("Original Fare:", originalFar);
console.log("Doubled Fare:", doubledFar);





function selectDifferentDrivers(arrayOfDrivers, func) {
    // Check if func is a function
    if (typeof func !== 'function') {
      throw new Error('Second argument must be a function');
    }

    // Call the function with the array of drivers and return the result
    return func(arrayOfDrivers);
  }

  // Example function to return the first two drivers
  function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }

  // Example usage
  const arrayOfDrivers = ['Driver 1', 'Driver 2', 'Driver 3', 'Driver 4', 'Driver 5'];
  const firstTwoDrives = selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers);
  console.log(firstTwoDrivers); // Output: ['Driver 1', 'Driver 2']