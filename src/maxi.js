const maxi = (listOfNumbers) => {
    
    numberOfElements = listOfNumbers.length;
    if(numberOfElements == 1)
        return listOfNumbers[0];
    else{
        if(listOfNumbers[0] > listOfNumbers[1]){
            tmp = listOfNumbers[0];
            listOfNumbers[0] = listOfNumbers[1];
            listOfNumbers[1] = tmp;
        }
        return maxi(listOfNumbers.slice(1, numberOfElements));
    }
}
module.exports = maxi;
