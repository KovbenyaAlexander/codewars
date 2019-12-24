function clean_string(s) {
    s = s.split(``);
    console.log(s);

    //s.splice(0, 3);
    console.log(s);

    for (let i = 0; i < s.length; i++) {


        if (s[i] === `#`) {
            if (s[i - 1]) {
                s.splice(i - 1, 2);
                i = -1;
            }
            if (i === 0) {
                s.splice(0, 1);
            }

        }
    }
    return s.join(``);

};

clean_string(`AAA##xxxxDE#`);

/*
    https://www.codewars.com/kata/backspaces-in-string/javascript
*/