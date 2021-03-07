
const map = (listOfNumbers, func) => {
    
    numberOfElements = listOfNumbers.length;
    
    if(numberOfElements == 0)
        return [];
        
    var result = [];
    return Helper(listOfNumbers, func, result);
       
}

const Helper = (listOfNumbers, func, result) => {
    
    numberOfElements = listOfNumbers.length;
    
    if(numberOfElements == 0)
        return result;
        
    result.push(func(listOfNumbers[0]));
    return Helper(listOfNumbers.slice(1, numberOfElements),func, result);
    
}
module.exports = map;
