function dirReduc(arr) {
    let a = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == `NORTH`) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[j] == `SOUTH`) {
                    arr[i] = '';
                    arr[j] = '';
                    i = 0;
                    break;
                }
            }

        }
    }

    a = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == `EAST`) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[j] == `WEST`) {
                    arr[i] = '';
                    arr[j] = '';
                    i = 0;
                    break;
                }
            }
        }
    }
    //console.log(arr.filter(item => item));
    return arr.filter(item => item);
}





/*
//*****OLD VERSION*****
//POCHTI RABOTAET :(


function dirReduc(arr){
    let a = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == `NORTH`){
            for(let j = 0; j < arr.length; j++){
                if(arr[j] == `SOUTH`){
                    arr[i] = '';
                    arr[j] = '';
                    break;
                }
            }
            if(a < 50){ //ZACHEM ETA HREN'?
                i = 0;
            }
            a++;
        }
    }

    a = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == `EAST`){
            for(let j = 0; j < arr.length; j++){
                if(arr[j] == `WEST`){
                    arr[i] = '';
                    arr[j] = '';
                    break;
                }
            }
        }
        if(a < 50){
            i = 0;
        }
        a++;
    }
    //console.log(arr.filter(item => item));
    return arr.filter(item => item);
}

*/