
const filter = (listOfNumbers, func) => {
    
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
    
    if(func(listOfNumbers[0]))
        result.push(listOfNumbers[0]);
    
    return Helper(listOfNumbers.slice(1, numberOfElements),func, result);
    
}
module.exports = filter;
