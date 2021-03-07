const tail = (listOfNumbers) => {
    
    listToReturn = [];
    numberOfElementsProvided = listOfNumbers.length;
    if(listOfNumbers.length > 0)
        listToReturn = listOfNumbers.slice(1, numberOfElementsProvided);    

    return listToReturn;   
}
module.exports = tail;
