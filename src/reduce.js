
const reduce = (listOfNumbers, func, begin) => {
    
    numberOfElements = listOfNumbers.length;
    if(numberOfElements == 0)
        return begin;

    var result = "";
    if(Number.isInteger(begin))
        result = begin.toString(10);
    
    if(typeof begin == 'undefined')
        begin = '';

    return begin + Helper(listOfNumbers, func, result);

    
       
}

const Helper = (listOfNumbers, func, result) => {
    
    numberOfElements = listOfNumbers.length;
    
    if(numberOfElements == 0)
        return result;
    
    result += listOfNumbers[0];
    return Helper(listOfNumbers.slice(1, numberOfElements),func, result);
    
}
module.exports = reduce;
