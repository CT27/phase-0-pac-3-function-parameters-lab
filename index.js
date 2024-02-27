// Define the function
function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  
// Call the function
console.log(introduction("Aki"));

// Define function
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  // Set up and call the function using multiple values
  console.log(introductionWithLanguage("Aki", "Ember.js"));
  
// previous lesson
  function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }

  // Define function
function introductionWithLanguageOptional(name, language ="JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }