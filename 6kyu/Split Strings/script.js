function solution(str){
    let res = [];
    for(let i = 0; i < str.length; i += 2){
        if(str[i+1]){
           res.push(`${str[i]}${str[i + 1]}`);
        }
    }
    str.length % 2 == 1 ? res.push(`${str[str.length - 1]}_`) : true;
    console.log(res);
    return res;
}

solution(`abcdes`);



