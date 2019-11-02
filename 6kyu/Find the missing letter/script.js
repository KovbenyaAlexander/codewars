function findMissingLetter(array)
{
    array = array.map(item => item.charCodeAt());
    for(let i = 0; i < array.length; i++){
        if(array[i] - array[i+1] != -1){
            return String.fromCharCode(array[i] + 1);
        }
    }
}

findMissingLetter(['a','b','c','d','f'])


//    https://www.codewars.com/kata/find-the-missing-letter/javascript