function add(n) {

    let sum = n;

    function count(n) {
        sum += n;
        return count;
    };


    count.valueOf = function () {
        return sum;
    }

    return count;
}


/*
https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/discuss/javascript

Q: Hi. How i can return the value during the last iteration?
A: You have to override the prototype "valueOf" to return the res value in your case. Then, to test, the "==" operator will coerce the function to return the valueOf() this function.
*/