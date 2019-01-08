// Code your solution in this file.
function lowerCaseDrivers(arrayDrivers){
    return arrayDrivers.map(function(driver){
        return driver.toLowerCase()
    });
};

function nameToAttributes(arrayDrivers){
    let obj = {} 
    return arrayDrivers.map(function(driver){
        const newArray = driver.split(" ");
        return obj = Object.assign({}, obj, {["firstName"]:newArray[0]}, {["lastName"]:newArray[1]});
    });
};

function attributesToPhrase(arrayDrivers){
    return arrayDrivers.map(function(driver){
        return `${driver['name']} is from ${driver['hometown']}`
    });
};