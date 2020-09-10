String.prototype.vowel = function () {

    if (!this) {
        console.log(`false`);
        return false;
    }

    if (this.match(/[^aeiouAEIOU]{2,99}$/)) {
        console.log(`false`);

        return false;
    }

    console.log(`true`);

    return true;
};


`ou`.vowel();
`ou`.vowel();
`ou`.vowel();
`dfg`.vowel();
`dsgsdf`.vowel();
`aaTa`.vowel();