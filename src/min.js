const min = (listOfNumbers) => {
    
    numberOfElements = listOfNumbers.length;
    if(numberOfElements == 1)
        return listOfNumbers[0];
    else{
        if(listOfNumbers[0] < listOfNumbers[1]){
            tmp = listOfNumbers[0];
            listOfNumbers[0] = listOfNumbers[1];
            listOfNumbers[1] = tmp;
        }
        return min(listOfNumbers.slice(1, numberOfElements));
    }
}
module.exports = min;
